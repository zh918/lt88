package com.lt88.components;

import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import android.util.Log;
import android.webkit.WebView;

/**
 * Created by Administrator on 2018/1/23.
 */

public class WebViewHelper {
    public static Handler mHandler = new Handler();

    public WebViewHelper(){

    }

    public static void execJs(String script, WebView webview) {
        // 如果是主线程，则直接执行了
        if (Looper.myLooper() == Looper.getMainLooper()) {
            try {
                if (webview != null) {
                    webview.loadUrl("javascript:" + script);
                }
            } catch (Throwable t) {
            }
        } else {
            // 不是主线程，需要通过handler转一道。
            if (mHandler != null) {
                Message msg = mHandler.obtainMessage(1, script);
                mHandler.sendMessage(msg);
            }
        }
    }
}
