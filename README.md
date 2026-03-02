# RTM-Interlocking-Script
RTM/ATSAssistMod/WebCTC/SignalControllerModを組み合わせ作る連動装置のJavaScriptサンプルコードです。

内容
1. ifttt_interlocking_lever.js
   指定座標のレバーがONになることで進路を予約します。
   
3. ifttt_interlocking_RS.js
   指定座標のレッドストーン信号で進路を予約します。
   RS回路を用いた自動進路など、複雑なシステムに応用できます。

使用方法
 1. 使用するJavaScriptコードをテキストエディターで開く
 2. 各変数に必要事項を定義する
 3. ATSAssistModのIFTTTブロックを以下の設定で用意する
     IF: RS信号入力 -> OFF
     THEN: JavaScript
4. スクリプトをコピーして、IFTTTブロックの[V]ボタンで貼り付ける

