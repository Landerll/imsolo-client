
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Eat cells smaller than you and don't get eaten by the bigger ones, as an MMO">
    <meta name="keywords" content="agario, agar, io, cell, cells, virus, bacteria, blob, game, games, web game, html5, fun, flash">
    <meta name="robots" content="index, follow">
    <meta name="viewport" content="minimal-ui, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <title>IMSOLO.PRO WEB (testing)</title>
    <link id="favicon" rel="icon" type="image/png" href="assets/img/favicon.png">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:700" rel="stylesheet" type="text/css">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/css/index.css" rel="stylesheet">
    <link href="assets/css/gallery.css" rel="stylesheet">
    <script src="https://legendmod.ml/jquery.min.js"></script>	
    <script src="assets/js/quadtree.js"></script>
    <script src="assets/js/main_out.js"></script>
    <script src="assets/js/skinhandler.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
</head>
<body onload="setserver('127.0.0.1:8888');skinHandler()">
    <div id="gallery" onclick="if (event.target == this) this.hide()" style="display: none;">
        <div id="gallery-content">
            <div id="gallery-header">Free Skins - Gallery</div>
            <button id="gallery-youtubers" class="youtuberSkinsBtn-gallery" onclick="showYoutuberSkins()">Youtuber Skins - Gallery</button>
            <div id="gallery-body"></div>
        </div>
    </div>
    <div id="gallery-yt" onclick="if (event.target == this) this.hide()" style="display: none;">
        <div id="gallery-yt-content">
            <div id="gallery-yt-header">Youtuber Skins</div>
            <div id="gallery-yt-body"></div>
        </div>
    </div>
    <div id="settings-window" onclick="if (event.target == this) this.hide()" style="display: none;">
        <div id="settings-window-content">
            <div id="settings-window-header">Imsolo Web Settings</div>
            <div id="settings-window-body">
                <div>
                    <label class="control control-checkbox">Show skins<input id="showSkins" type="checkbox" /><div class="control_indicator"></div></label>
                    <label class="control control-checkbox">Show Names<input id="showNames" type="checkbox" /><div class="control_indicator"></div></label>
                    <label class="control control-checkbox">Dark Theme<input id="darkTheme" type="checkbox" /><div class="control_indicator"></div></label>
                    <label class="control control-checkbox">Show Colors<input id="showColor" type="checkbox" /><div class="control_indicator"></div></label>
                    <label class="control control-checkbox">Show Mass<input id="showMass" type="checkbox" /><div class="control_indicator"></div></label>
                    <label class="control control-checkbox">Show Chat<input id="showChat" type="checkbox" /><div class="control_indicator"></div></label>
                    <label class="control control-checkbox">Show Minimap<input id="showMinimap" type="checkbox" /><div class="control_indicator"></div></label>
                    <label class="control control-checkbox">Show Position<input id="showPosition" type="checkbox" /><div class="control_indicator"></div></label>
                    <label class="control control-checkbox">Show Map & Cell Borders<input id="showBorder" type="checkbox" /><div class="control_indicator"></div></label>
                    <label class="control control-checkbox">Show Grid<input id="showGrid" type="checkbox" /><div class="control_indicator"></div></label>
                    <label class="control control-checkbox">Enable Zoomout<input id="moreZoom" type="checkbox" /><div class="control_indicator"></div></label>
                    <label class="control control-checkbox">Fill Skins<input id="fillSkin" type="checkbox" /><div class="control_indicator"></div></label>
                    <label class="control control-checkbox">Show Background Sectors<input id="backgroundSectors" type="checkbox" /><div class="control_indicator"></div></label>
                    <label class="control control-checkbox">Enable Smooth Animations<input id="jellyPhysics" type="checkbox" /><div class="control_indicator"></div></label>
                    
                    <div id="keys">
                        <p class="keyName">Feed
                            <input type="text" id="feed" class="key" maxlength="1"/>
                        </p>
                        <p class="keyName">DoubleSplit
                            <input type="text" id="doublesplit" class="key" maxlength="1"/>
                        </p>
                        <p class="keyName">TripleSplit
                            <input type="text" id="triplesplit" class="key" maxlength="1"/>
                        </p>
                        <p class="keyName">16x Split
                            <input type="text" id="16split" class="key" maxlength="1"/>
                        </p>
                        <p class="keyName">Bot Feed
                            <input type="text" id="botFeed" class="key" maxlength="1"/>
                        </p>
                        <p class="keyName">Bot Split
                            <input type="text" id="botSplit" class="key" maxlength="1"/>
                        </p>
                        <p class="keyName">Bot DoubleSplit
                            <input type="text" id="botDoubleSplit" class="key" maxlength="1"/>
                        </p>
                        <p class="keyName">Bot TripleSplit
                            <input type="text" id="botTripleSplit" class="key" maxlength="1"/>
                        </p>
                        <p class="keyName">Bot 16x Split
                            <input type="text" id="bot16x" class="key" maxlength="1"/>
                        </p>
                    </div>
                </div>      
            </div>
        </div>
    </div>
    <div id="overlays" style="display: none;">
        <div id="helloDialog">
            <div class="form-group">
                <h2 id="title">Imsolo.pro Web</h2>
            </div>
                <div id="play-style-menu" class="play-style-menu-div">
                    <input id="nick" class="form-control zindex" placeholder="Nickname" maxlength="17">
                    <button id="play-btn" class="play-btn-pc"><span>Play</span></button>
                </div>
            <!-- <p class="newBadge">Savaging players can result in a permanent ban.</p> -->
            <button id="show-settings-menu-btn" class="btn btn-play btn-primary btn-needs-server btn-info glyphicon glyphicon-cog" onclick="showSettings()"></button>
            <button id="spectate-btn" onclick="spectate()" class="btn btn-warning btn-spectate btn-needs-server glyphicon glyphicon-eye-open"></button>
            <button id="gallery-btn" onclick="openSkinsList()" class="btn btn-play btn-primary btn-needs-server btn-info glyphicon glyphicon-picture"></button>
            <div style="text-align:center;" class="form-group">
                <input id="skin" class="form-control" placeholder="Skin Name"> 
            </div>
            <div id="settings" class="checkbox">
                <table style="width:100%">
                    <div style="margin: 6px;" class="control-group">
                </table>
                </div>
                <hr>
                <div id="footer">
                    <p>if you want to play on the Original 2015, 2016 and 2017 clients, click here:</p>
                    <a href="/2015/">
                        <button id="2015-btn" class="other-gamemode-versions button-client-select">2015</button>
                    </a>
                    <a href="/2016/">
                        <button id="2016-btn" class="other-gamemode-versions button-client-select">2016</button>
                    </a>
                    <a href="/2017/">
                        <button id="2017-btn" class="other-gamemode-versions button-client-select">2017</button>
                    </a>
                </div>
                <div id="rightOptions" class="rightOptions">
                    <div id="spacegmd">
                        <br>
                        <br>
                    </div>
                    <div style="margin: 6px;" id="gamemode">
                        <div>
                           <!--  <a href="https://fr.surveymonkey.com/r/YMMCTX3">
                                <button id="2015-btn" class="other-gamemode-versions button-client-select whiteborder">Do you enjoy beta party mode? Click here to help us improving it! Submit your feedback :)</button>
                            </a><br> -->
                            <!-- <button class="button-gamemodes-imsolo-style-newmode button-gamemodes-select whiteborder" onclick="setserver('imsolo.pro:2110')">BETA PARTY MODE V2<img class="img-gamemodes-imsolo-megasplit" src="assets/img/party.png" /></button>
                            <button class="button-gamemodes-imsolo-style-newmode button-gamemodes-select whiteborder" onclick="setserver('imsolo.pro:2109')"><span class="newBadge">NEW</span> BETA SELFEED<img class="img-gamemodes-imsolo-megasplit" src="assets/img/party.png" /></button>
                         -->
                        </div>
                        <center>
                            <table>
                                <tbody>
                                    <div class="gamemodesDisplay">
                                        <button class="button-gamemodes-imsolo-style-megasplit button-gamemodes-select whiteborder" onclick="setserver('imsolo.pro:2110')">BETA PARTY MODE V2<img class="img-gamemodes-imsolo-megasplit" src="assets/img/party.png" /></button>
                                        <button class="button-gamemodes-imsolo-style-megasplit button-gamemodes-select whiteborder" onclick="setserver('imsolo.pro:2109')"><span class="newBadge">NEW</span> BETA SELFEED<img class="img-gamemodes-imsolo-megasplit" src="assets/img/crazyselfeed.png" /></button>
                                        <button class="button-gamemodes-imsolo-style-megasplit button-gamemodes-select whiteborder" onclick="setserver('imsolo.pro:2100')"><span class="newBadge">NEW</span>BETA 1v1 SCRIMS<img class="img-gamemodes-imsolo-megasplit" src="assets/img/1v1.png" /></button>
                                      </div>
                                  <div class="gamemodesDisplay">
                                    <button class="button-gamemodes-imsolo-style-megasplit button-gamemodes-select whiteborder" onclick="setserver('imsolo.pro:4110')">PARTY MEGASPLIT<img class="img-gamemodes-imsolo-megasplit" src="assets/img/megasplit.png" /></button>
                                    <button class="button-gamemodes-imsolo-style-megasplit button-gamemodes-select whiteborder" onclick="setserver('imsolo.pro:2108')">BETA MEGASPLIT<!--  <span class="newBadge">NEW</span> --><img class="img-gamemodes-imsolo-megasplit" src="assets/img/megasplit.png" /></button>
                                    <button class="button-gamemodes-imsolo-style-megasplit button-gamemodes-select whiteborder" onclick="setserver('imsolo.pro:2104')">BETA PARTY MODE<img class="img-gamemodes-imsolo-megasplit" src="assets/img/party.png" /></button>
                                  </div>
                                    <tr>
                                        <td>&nbsp;
                                            <button class="button-gamemodes-imsolo-style button-gamemodes-select whiteborder" onclick="setserver('imsolo.pro:4101')">PARTY MODE<img class="img-gamemodes-imsolo" src="assets/img/party.png" /></button>
                                        </td>
                                        <td>&nbsp;
                                            <button class="button-gamemodes-imsolo-style button-gamemodes-select whiteborder" onclick="setserver('imsolo.pro:2107')">INSTANT MERGING<img class="img-gamemodes-imsolo" src="assets/img/instant.png" /></button>
                                        </td>
                                        <td>&nbsp;
                                            <button class="button-gamemodes-imsolo-style button-gamemodes-select whiteborder" onclick="setserver('imsolo.pro:4107')">PARTY SELFEED<img class="img-gamemodes-imsolo" src="assets/img/selfeed.png" /></button>
                                        </td>
                                        <td>&nbsp;
                                            <button class="button-gamemodes-imsolo-style button-gamemodes-select whiteborder" onclick="setserver('imsolo.pro:4108')">CRAZY SELFEED<img class="img-gamemodes-imsolo" src="assets/img/crazyselfeed.png" /></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp;
                                            <button class="button-gamemodes-imsolo-style button-gamemodes-select whiteborder" onclick="setserver('imsolo.pro:4102')">1V1#1 FFA TOURNEY<img class="img-gamemodes-imsolo" src="assets/img/1v1.png" /></button>
                                        </td>
                                        <td>&nbsp;
                                            <button class="button-gamemodes-imsolo-style button-gamemodes-select whiteborder" onclick="setserver('imsolo.pro:4104')">1V1#2 FFA TOURNEY<img class="img-gamemodes-imsolo" src="assets/img/1v1.png" /></button>
                                        </td>
                                        <td>&nbsp;
                                            <button class="button-gamemodes-imsolo-style button-gamemodes-select whiteborder" onclick="setserver('imsolo.pro:4105')">1V1#3 FFA TOURNEY<img class="img-gamemodes-imsolo" src="assets/img/1v1.png" /></button>
                                        </td>
                                        <td>&nbsp;
                                            <button class="button-gamemodes-imsolo-style button-gamemodes-select whiteborder" onclick="setserver('imsolo.pro:4111')">1V1#1 EXP TOURNEY<img class="img-gamemodes-imsolo" src="assets/img/1v1megasplit.png" /></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp;
                                            <button class="button-gamemodes-imsolo-style button-gamemodes-select whiteborder" onclick="setserver('imsolo.pro:4112')">1V1#2 EXP TOURNEY<img class="img-gamemodes-imsolo" src="assets/img/1v1megasplit.png" /></button>
                                        </td>
                                        <td>&nbsp;
                                            <button class="button-gamemodes-imsolo-style button-gamemodes-select whiteborder" onclick="setserver('imsolo.pro:4113')">1V1#3 EXP TOURNEY<img class="img-gamemodes-imsolo" src="assets/img/1v1megasplit.png" /></button>
                                        </td>
                                        <td>&nbsp;
                                            <button class="button-gamemodes-imsolo-style button-gamemodes-select whiteborder" onclick="setserver('imsolo.pro:4103')">2v2 TOURNEY<img class="img-gamemodes-imsolo" src="assets/img/2v2.png" /></button>
                                        </td>
                                        <td>&nbsp;
                                            <button class="button-gamemodes-imsolo-style button-gamemodes-select whiteborder" onclick="setserver('imsolo.pro:4109')">2v2V2 TOURNEY<img class="img-gamemodes-imsolo" src="assets/img/2v2v2.png" /></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </center>
                        </ul>
                    </div>
                </div>
                <div id="leftOptions" class="leftOptions">
                    <div id="settings" class="checkbox">
                        <table style="width:100%">
                            <div style="margin: 6px;" class="control-group">
                        </table>
                            </script-->
                        <div id="showSettingsDiv" class="div-border-menu control-group">
                            <br>
                            <h4>imsolo.pro/web - Changelog</h4>
                            <br>
                            <p><span class="newBadge">NEW UPDATE :</span> Beta Self-feed</p>
                            <p>----------------</p>
                            <p>- Instant merging</p>
                            <p>- Spawn big</p>
                            <p>- Get mass by selfeeding</p>
                            <p>----------------</p>
                            <p>Quick note (lags)</p>
                            <p>If you lag, use Chrome Canary</p>
                            <p>or Opera GX browsers.</p>
                            <p>----------------</p>
                            <p></p>
                            <p></p>
                            <p>Join the discord to give some feedback :)</p>
                            <div id="instructions">
                              <hr class="hrMenu">
                                <center>
                                    <span class="text-muted">
                                    Press <b>D</b> for macro doublesplit<br>
                                    Press <b>Shift</b> for macro sixteen<br>
                                    <br>
                                    Press <b>X</b> for bot doublesplit<br>
                                    Press <b>C</b> for bot sixteen<br>
                                </span>
                                </center>
                            </div>
                        </div>
                        </div>  
                </div>
        </div>
        </center>
    </div>
    </div>
    </div>
    </div>
    <div id="connecting">
        <div id="connecting-content">
            <h2>Connecting</h2>
            <p> If you cannot connect to the servers, check if you have some anti virus or firewall blocking the connection.</p>
        </div>
    </div>
    <div id="mobileStuff" style="display: none;">
        <div id="touchpad"></div>
        <div id="touchCircle" style="display: none;"></div>
        <img src="./assets/img/split.png" id="splitBtn">
        <img src="./assets/img/eject.png" id="ejectBtn">
        <img src="./assets/img/splitBot.png" id="splitBotBtn">
        <img src="./assets/img/ejectBot.png" id="ejectBotBtn">
    </div>
    <canvas id="canvas" class="chat-style" width="800" height="600"></canvas>
    <input type="text" id="chat_textbox" placeholder="Press enter to chat" maxlength="50">
    <div style="font-family:'Ubuntu'">&nbsp;</div>
</body>
</html>
