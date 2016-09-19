<?php
$z[0]=Array("field","",266,295);
$z[0][4]['name']="typename";
$z[1]=Array("global","",296,322);
$z[1][4]['name']="cfg_webname";
$z[2]=Array("field","",367,396);
$z[2][4]['name']="keywords";
$z[3]=Array("field","",440,498);
$z[3][4]['name']="description";
$z[3][4]['function']="html2text(@me)";
$z[4]=Array("include","",1210,1245);
$z[4][4]['filename']="head.htm";
$z[5]=Array("include","",1451,1486);
$z[5][4]['filename']="left.htm";
$z[6]=Array("field","",1571,1600);
$z[6][4]['name']="position";
$z[7]=Array("list","\r\n              <dl class=\"news_dl\">\r\n            <dt><a href=\"[field:arcurl/]\" target=\"_blank\" title=\"[field:title/]\"\r\n                                        class=\"dt_1\"> [[field:typename/]][field:title/]</a><span class=\"dt_2\">[\r\n              [field:pubdate function=\"MyDate('Y-m-d',@me)\"/]\r\n              ]</span>\r\n                  <div class=\"clear\"></div>\r\n                </dt>\r\n            <dd> [field:description function='cn_substr(@me,220)'/]...</dd>\r\n          </dl>\r\n              ",1752,2285);
$z[7][4]['pagesize']="10";
$z[8]=Array("pagelist","",2523,2577);
$z[8][4]['listitem']="index,end,pre,next,pageno";
$z[9]=Array("include","",2800,2837);
$z[9][4]['filename']="footer.htm";

?>