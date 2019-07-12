import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Material App Bar'),
        ),
        body: Center(
          child: Container(
            child: Text(
              'Hello 李祎泽,要好好努力做一个全栈开发者哦，努力，奋斗，岂能尽如人意，但求无愧我心',
              textAlign: TextAlign.left,
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(
                  fontSize: 25.0,
                  color: Color.fromARGB(255, 255, 0, 0),
                  decoration: TextDecoration.underline,
                  decorationStyle: TextDecorationStyle.solid),
            ),
          ),
        ),
      ),
    );
  }
}
