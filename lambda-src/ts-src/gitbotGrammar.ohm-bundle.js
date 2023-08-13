'use strict';const {makeRecipe}=require('ohm-js');const result=makeRecipe(["grammar",{"source":"GitbotArgs {\n\tExp = EmptyExp | HelpExp | LoginExp | ProjectExp | StatusExp\n\n  EmptyExp = end\n    \n  HelpExp = \"help\" | \"?\"\n  \n  LoginExp = \"login\"\n  \n  ProjectExp = (\"project\" ProjectHelpExp) | (\"project\" ProjectConnectExp)\n  \n  ProjectHelpExp = HelpExp\n  \n  ProjectConnectExp = ProjectIdentifierExp \"connect\"\n  ProjectIdentifierExp = projectNamePartNoQuote | projectNamePartQuote\n  projectNamePartNoQuote = alnum (alnum|\"-\"|\"_\"|\"'\"|\"?\"|\"!\")*\n  projectNamePartQuote = \"\\\"\" alnum (space|alnum|\"-\"|\"_\"|\"'\"|\"?\"|\"!\")* \"\\\"\"\n  \n  StatusExp = \"status\"\n}"},"GitbotArgs",null,"Exp",{"Exp":["define",{"sourceInterval":[14,74]},null,[],["alt",{"sourceInterval":[20,74]},["app",{"sourceInterval":[20,28]},"EmptyExp",[]],["app",{"sourceInterval":[31,38]},"HelpExp",[]],["app",{"sourceInterval":[41,49]},"LoginExp",[]],["app",{"sourceInterval":[52,62]},"ProjectExp",[]],["app",{"sourceInterval":[65,74]},"StatusExp",[]]]],"EmptyExp":["define",{"sourceInterval":[78,92]},null,[],["app",{"sourceInterval":[89,92]},"end",[]]],"HelpExp":["define",{"sourceInterval":[100,122]},null,[],["alt",{"sourceInterval":[110,122]},["terminal",{"sourceInterval":[110,116]},"help"],["terminal",{"sourceInterval":[119,122]},"?"]]],"LoginExp":["define",{"sourceInterval":[128,146]},null,[],["terminal",{"sourceInterval":[139,146]},"login"]],"ProjectExp":["define",{"sourceInterval":[152,223]},null,[],["alt",{"sourceInterval":[165,223]},["seq",{"sourceInterval":[165,191]},["terminal",{"sourceInterval":[166,175]},"project"],["app",{"sourceInterval":[176,190]},"ProjectHelpExp",[]]],["seq",{"sourceInterval":[194,223]},["terminal",{"sourceInterval":[195,204]},"project"],["app",{"sourceInterval":[205,222]},"ProjectConnectExp",[]]]]],"ProjectHelpExp":["define",{"sourceInterval":[229,253]},null,[],["app",{"sourceInterval":[246,253]},"HelpExp",[]]],"ProjectConnectExp":["define",{"sourceInterval":[259,309]},null,[],["seq",{"sourceInterval":[279,309]},["app",{"sourceInterval":[279,299]},"ProjectIdentifierExp",[]],["terminal",{"sourceInterval":[300,309]},"connect"]]],"ProjectIdentifierExp":["define",{"sourceInterval":[312,380]},null,[],["alt",{"sourceInterval":[335,380]},["app",{"sourceInterval":[335,357]},"projectNamePartNoQuote",[]],["app",{"sourceInterval":[360,380]},"projectNamePartQuote",[]]]],"projectNamePartNoQuote":["define",{"sourceInterval":[383,442]},null,[],["seq",{"sourceInterval":[408,442]},["app",{"sourceInterval":[408,413]},"alnum",[]],["star",{"sourceInterval":[414,442]},["alt",{"sourceInterval":[415,440]},["app",{"sourceInterval":[415,420]},"alnum",[]],["terminal",{"sourceInterval":[421,424]},"-"],["terminal",{"sourceInterval":[425,428]},"_"],["terminal",{"sourceInterval":[429,432]},"'"],["terminal",{"sourceInterval":[433,436]},"?"],["terminal",{"sourceInterval":[437,440]},"!"]]]]],"projectNamePartQuote":["define",{"sourceInterval":[445,518]},null,[],["seq",{"sourceInterval":[468,518]},["terminal",{"sourceInterval":[468,472]},"\""],["app",{"sourceInterval":[473,478]},"alnum",[]],["star",{"sourceInterval":[479,513]},["alt",{"sourceInterval":[480,511]},["app",{"sourceInterval":[480,485]},"space",[]],["app",{"sourceInterval":[486,491]},"alnum",[]],["terminal",{"sourceInterval":[492,495]},"-"],["terminal",{"sourceInterval":[496,499]},"_"],["terminal",{"sourceInterval":[500,503]},"'"],["terminal",{"sourceInterval":[504,507]},"?"],["terminal",{"sourceInterval":[508,511]},"!"]]],["terminal",{"sourceInterval":[514,518]},"\""]]],"StatusExp":["define",{"sourceInterval":[524,544]},null,[],["terminal",{"sourceInterval":[536,544]},"status"]]}]);module.exports=result;