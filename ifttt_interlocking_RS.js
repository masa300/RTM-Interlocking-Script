// インポート
// 以下を変更すると正しく動作しなくなる恐れがあります。
importPackage(Packages.org.webctc.webctcex.utils);
importPackage(Packages.jp.kaiz.atsassistmod.utils);
importPackage(Packages.jp.ngt.rtm.electric);
importPackage(Packages.jp.ngt.ngtlib.io);
// インポート ここまで


// ユーザー編集エリア ここから

// 進路を予約するKey名称
// ダブルクォーテーション(")の間に記入して下さい。
var key = "KEY";

// てこのレッドストーン入力を行う座標
// X,Y,Z を半角数値で記入して下さい。
var leverPos = [X, Y, Z];

// 進路予約RailGroupのUUID配列
// UUIDをダブルクォーテーション(")の間に記入して下さい。
// UUIDが複数ある場合、行末にカンマ(,)を入れ改行する。
// スペースを含む全ての文字を半角で入力する。
var uuids = [
    "UUID1",
    "UUID2"
];
// ユーザー編集エリア ここまで


// メインコード
// 以下を変更すると正しく動作しなくなる恐れがあります。
function doThat(tile, train, first) {
    var iftttTileEntity = new ATSATileEntityWrapper(tile);
    var world = iftttTileEntity.getWorld();

    if(world.func_72864_z(leverPos[0], leverPos[1], leverPos[2])) {
        RailGroupManager.reserve(uuids, key);
    } else {
        RailGroupManager.release(uuids, key);
    }

    tile.setRedStoneOutput(RailGroupManager.isReserved(uuids, key) ? 15 : 0);
}
// メインコード ここまで
