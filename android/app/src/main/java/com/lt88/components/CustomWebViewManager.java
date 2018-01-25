package com.lt88.components;

import android.content.ContentProvider;
import android.content.Context;
import android.graphics.Bitmap;
import android.support.annotation.Nullable;
import android.util.Log;
import android.webkit.WebView;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.webview.ReactWebViewManager;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.util.Map;


@ReactModule(name = CustomWebViewManager.REACT_CLASS)
public class CustomWebViewManager extends ReactWebViewManager {
    /* This name must match what we're referring to in JS */
    protected static final String REACT_CLASS = "RCTCustomWebView";

    protected static class CustomWebViewClient extends ReactWebViewClient {
        @Override
        public void onPageStarted(WebView webView, String url, Bitmap favicon) {
            super.onPageStarted(webView, url, favicon);

            String jscStr = null;
            InputStream in = null;
            ByteArrayOutputStream out = null;
            try {
                Context context =webView.getContext();
                in = context.getAssets().open("js/jsc.js");
                out = new ByteArrayOutputStream();

                byte buff[] = new byte[1024 * 2];
                int numread = -1;
                while (true) {
                    numread = in.read(buff);
                    if (numread == -1) {
                        // 读完了
                        break;
                    }
                    out.write(buff, 0, numread);

                }

                jscStr = out.toString();

            } catch (Exception e) {
                String errScript = "alert('jsc注入时发送错误');";
                WebViewHelper.execJs(errScript,webView);
            } finally {
                if (in != null) {
                    try {
                        in.close();
                    } catch (Exception e) {
                        String errScript = "alert('jsc注入时发送错误1');";
                        WebViewHelper.execJs(errScript,webView);
                    }
                }
                if (out != null) {
                    try {
                        out.close();
                    } catch (Exception e) {
                        String errScript = "alert('jsc注入时发送错误2');";
                        WebViewHelper.execJs(errScript,webView);
                    }
                }
            }

//          String script = ";(function(window){window.$jsc = { _events:[],on:function(eventName, func) {$jsc._events.push({name:eventName,cb:func});},emit:function(eventName,args) {var eventModel = $jsc._events.find(e=>e.name == eventName);if (eventModel) eventModel.cb(args);},native: {exec:function(apiName,args){var request = 'jsc://exit.app';document.location = request;}},back:function(msg) {alert(msg)}};})(window);";
            WebViewHelper.execJs(jscStr,webView);

        }


        @Override
        public void onPageFinished(WebView webView, String url){
            super.onPageFinished(webView, url);

            String scriptBridgeReady = "var event = new Event('RNJSBridgeReady');document.dispatchEvent(event);";
            WebViewHelper.execJs(scriptBridgeReady,webView);

            String scriptOnCreate = "$jsc.emit('onCreate');";
            String scriptOnResume = "$jsc.emit('onResume');";
            WebViewHelper.execJs(scriptOnCreate,webView);
            WebViewHelper.execJs(scriptOnResume,webView);
        }

        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            if (url.startsWith("jsc")) {
                try {
                    // todo 注意：这里需要进行分支处理，不同的命令执行func不一样，抽到另外一层去处理。
                    ReactContext mContext = (ReactContext)view.getContext();
                    mContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("rntest","stephen");
                } catch (Exception e) {

                }

                return true;
            }


            return false;
        }
    }

    protected static class CustomWebView extends ReactWebView {
        public CustomWebView(ThemedReactContext reactContext) {
            super(reactContext);
        }

        protected @Nullable String mFinalUrl;

        public void setFinalUrl(String url) {
            mFinalUrl = url;
        }

        public String getFinalUrl() {
            return mFinalUrl;
        }
    }

//    @ReactProp(name = "finalUrl")
//    public void setFinalUrl(WebView view, String url) {
//        ((CustomWebView) view).setFinalUrl(url);
//    }

    @Override
    protected ReactWebView createReactWebViewInstance(ThemedReactContext reactContext) {
        return new CustomWebView(reactContext);
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected void addEventEmitters(ThemedReactContext reactContext, WebView view) {
        view.setWebViewClient(new CustomWebViewClient());
    }

    @Override
    public @Nullable
    Map getExportedCustomDirectEventTypeConstants() {
        Map<String, Object> export = super.getExportedCustomDirectEventTypeConstants();
        if (export == null) {
            export = MapBuilder.newHashMap();
        }
        export.put("navigationCompleted", MapBuilder.of("registrationName", "onNavigationCompleted"));
        return export;
    }
}
