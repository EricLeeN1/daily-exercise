import 'package:flutter/material.dart';

void main() =>
    runApp(MyApp(items: new List<String>.generate(1000, (i) => 'Item $i')));

class MyApp extends StatelessWidget {
  final List<String> items;
  MyApp({Key key, @required this.items}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      home: Scaffold(
          appBar: new AppBar(title: new Text('首页')),
          
          // body: GridView(
          //   gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
          //       crossAxisCount: 3,
          //       mainAxisSpacing: 2.0,
          //       crossAxisSpacing: 2.0,
          //       childAspectRatio: 0.75),
          //   children: <Widget>[
          //     new Image.network(
          //         'http://img5.mtime.cn/mt/2018/10/22/104316.77318635_180X260X4.jpg',
          //         fit: BoxFit.cover),
          //     new Image.network(
          //         'http://img5.mtime.cn/mt/2018/10/10/112514.30587089_180X260X4.jpg',
          //         fit: BoxFit.cover),
          //     new Image.network(
          //         'http://img5.mtime.cn/mt/2018/11/13/093605.61422332_180X260X4.jpg',
          //         fit: BoxFit.cover),
          //     new Image.network(
          //         'http://img5.mtime.cn/mt/2018/11/07/092515.55805319_180X260X4.jpg',
          //         fit: BoxFit.cover),
          //     new Image.network(
          //         'http://img5.mtime.cn/mt/2018/11/21/090246.16772408_135X190X4.jpg',
          //         fit: BoxFit.cover),
          //     new Image.network(
          //         'http://img5.mtime.cn/mt/2018/11/17/162028.94879602_135X190X4.jpg',
          //         fit: BoxFit.cover),
          //     new Image.network(
          //         'http://img5.mtime.cn/mt/2018/11/19/165350.52237320_135X190X4.jpg',
          //         fit: BoxFit.cover),
          //     new Image.network(
          //         'http://img5.mtime.cn/mt/2018/11/16/115256.24365160_180X260X4.jpg',
          //         fit: BoxFit.cover),
          //     new Image.network(
          //         'http://img5.mtime.cn/mt/2018/11/20/141608.71613590_135X190X4.jpg',
          //         fit: BoxFit.cover),
          //   ],
          // )

          // body: GridView.count(
          //   padding:  const EdgeInsets.all(20.0),
          //   crossAxisSpacing: 10.0,
          //   crossAxisCount: 3,
          //   children: <Widget>[
          //     const Text('张三'),
          //     const Text('李四'),
          //     const Text('王五'),
          //     const Text('赵六'),
          //     const Text('小七'),
          //     const Text('小八'),
          //   ],
          // ),

          // body: new ListView.builder(
          //   itemCount: items.length,
          //   itemBuilder: (context, int index) {
          //     return new ListTile(
          //       title: new Text('${items[index]}'),
          //     );
          //   },
          // ),

          // body: Center(
          //   child: Container(height: 200.0, child: MyList()),
          // ),

          // body: new ListView(
          //   children: <Widget>[
          //     new ListTile(
          //       leading: new Icon(Icons.perm_camera_mic),
          //       title: new Text('perm_camera_mic'),
          //     ),
          //     new ListTile(
          //       leading: new Icon(Icons.apps),
          //       title: new Text('apps'),
          //     ),
          //     new ListTile(
          //       leading: new Icon(Icons.adb),
          //       title: new Text('adb'),
          //     )
          //   ],
          // ),

          // body: Center(
          //   child: Container(
          //     // child: new Text('你好，李祎泽', style: TextStyle(fontSize: 40.0)),
          //     // alignment: Alignment.topLeft,
          //     // height: 400.0,
          //     // width: 500.0,
          //     // padding: const EdgeInsets.fromLTRB(10.0, 30.0, 10.0, 10.0),
          //     // margin: const EdgeInsets.all(30.0),
          //     // decoration: new BoxDecoration(
          //     //   gradient: const LinearGradient(
          //     //     colors: [Colors.lightBlue,Colors.greenAccent,Colors.purple]
          //     //   ),
          //     //   border: Border.all(width: 5.0,color: Colors.red),
          //     //   borderRadius: new BorderRadius.all(
          //     //     const Radius.circular(28.0)
          //     //   )
          //     // ),

          //     // child: new Image.network(
          //     //     'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562989892046&di=644382b6c574a2331016a1ac6db3fbf2&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fc340fa703f223a8990a731416bc68620ae61150832d42-UUmQrT_fw658',
          //     //     fit: BoxFit.contain,
          //     //     repeat: ImageRepeat.repeat,
          //     //     color: Colors.greenAccent,
          //     //     colorBlendMode: BlendMode.modulate),
          //     // width: 300.0,
          //     // height: 200.0,
          //     // color:Colors.lightBlue,

          //     // constraints: ,
          //   ),
          // ),
          ),
    );
  }
}


class MyList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new ListView(
      scrollDirection: Axis.horizontal,
      children: <Widget>[
        new Container(
          width: 180.0,
          color: Colors.lightBlue,
        ),
        new Container(width: 180.0, color: Colors.yellow),
        new Container(
          width: 180.0,
          color: Colors.deepOrange,
        ),
        new Container(
          width: 180.0,
          color: Colors.deepPurpleAccent,
        ),
      ],
    );
  }
}
