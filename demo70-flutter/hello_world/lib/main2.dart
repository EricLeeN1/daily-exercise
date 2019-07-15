import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // var stack = new Stack(
    //   alignment: const FractionalOffset(1, 0.8),
    //   children: <Widget>[
    //     new CircleAvatar(
    //       backgroundImage: new NetworkImage(
    //           "http://img5.mtime.cn/mt/2018/11/13/093605.61422332_180X260X4.jpg"),
    //       radius: 100.0,
    //     ),
    //     new Positioned(
    //       top: 10.0,
    //       left: 10.0,
    //       child: new Text('李祎泽'),
    //     ),
    //     new Positioned(
    //       bottom: 10.0,
    //       right: 10.0,
    //       child: new Text('李祎泽'),
    //     )

    //     // new Container(
    //     //   decoration: new BoxDecoration(
    //     //     color: Colors.lightBlue,
    //     //   ),
    //     //   padding: EdgeInsets.all(5.0),
    //     //   child: Text('李祎泽 技术派'),
    //     // )
    //   ],
    // );

    var card = new Card(
      child: Column(
        children: <Widget>[
          ListTile(
              title: new Text('河南省灵宝市阳平镇',
                  style: TextStyle(fontWeight: FontWeight.w500)),
              subtitle: new Text('李祎泽：18866668888'),
              leading: new Icon(Icons.account_box, color: Colors.lightBlue)),
          ListTile(
              title: new Text('河南省灵宝市朱阳镇',
                  style: TextStyle(fontWeight: FontWeight.w500)),
              subtitle: new Text('李祎泽：18866668888'),
              leading: new Icon(Icons.account_box, color: Colors.lightBlue)),
          ListTile(
              title: new Text('河南省灵宝市豫灵镇',
                  style: TextStyle(fontWeight: FontWeight.w500)),
              subtitle: new Text('李祎泽：18866668888'),
              leading: new Icon(Icons.account_box, color: Colors.lightBlue))
        ],
      ),
    );

    return MaterialApp(
      title: 'Row Widget Demo',
      home: Scaffold(
        appBar: AppBar(
          title: Text('卡片布局组件'),
        ),
        body: Center(child: card),

        // body: Center(
        //   child: new Column(
        //   crossAxisAlignment: CrossAxisAlignment.center,
        //   mainAxisAlignment: MainAxisAlignment.center,
        //   children: <Widget>[
        //     Text('我是李祎泽'),
        //     Expanded(child: Text('账号:188****8111')),
        //     Text('密码：****11112222')
        //   ],
        // ))

        // body: new Row(
        //   children: <Widget>[
        //     Expanded(child: new RaisedButton(
        //       onPressed: () {},
        //       color: Colors.redAccent,
        //       child: new Text('红色按钮')
        //     )) ,
        //     Expanded(child: new RaisedButton(
        //       onPressed: () {},
        //       color: Colors.blueAccent,
        //       child: new Text('蓝色按钮')
        //     )),
        //     Expanded(child: new RaisedButton(
        //       onPressed: () {},
        //       color: Colors.yellowAccent,
        //       child: new Text('黄色按钮')
        //     ))
        //   ],
        // )
      ),
    );
  }
}
