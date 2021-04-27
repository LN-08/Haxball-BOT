/* 
###################################################################################################


██╗███╗░░██╗███████╗░█████╗░██████╗░███╗░░░███╗░█████╗░████████╗██╗░█████╗░███╗░░██╗
██║████╗░██║██╔════╝██╔══██╗██╔══██╗████╗░████║██╔══██╗╚══██╔══╝██║██╔══██╗████╗░██║
██║██╔██╗██║█████╗░░██║░░██║██████╔╝██╔████╔██║███████║░░░██║░░░██║██║░░██║██╔██╗██║
██║██║╚████║██╔══╝░░██║░░██║██╔══██╗██║╚██╔╝██║██╔══██║░░░██║░░░██║██║░░██║██║╚████║
██║██║░╚███║██║░░░░░╚█████╔╝██║░░██║██║░╚═╝░██║██║░░██║░░░██║░░░██║╚█████╔╝██║░╚███║
╚═╝╚═╝░░╚══╝╚═╝░░░░░░╚════╝░╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝░╚════╝░╚═╝░░╚══╝


@author 🇦🇷 | palacios#0617 | discordId: 795574772573405216
@author (assistant) 🇦🇷 | Embex#1367 | discordId: 407340344837931008
@discord | https://discord.gg/5UHRTyubDU
@version 1.0.0
@description | Bot for https://html5.haxball.com/headless
@source | soon...


###################################################################################################
*/







/* 
###################################################################################################


██╗░░██╗░█████╗░███╗░░██╗██████╗░██████╗░░█████╗░░█████╗░██╗░░██╗
██║░░██║██╔══██╗████╗░██║██╔══██╗██╔══██╗██╔══██╗██╔══██╗██║░██╔╝
███████║███████║██╔██╗██║██║░░██║██████╦╝██║░░██║██║░░██║█████═╝░
██╔══██║██╔══██║██║╚████║██║░░██║██╔══██╗██║░░██║██║░░██║██╔═██╗░
██║░░██║██║░░██║██║░╚███║██████╔╝██████╦╝╚█████╔╝╚█████╔╝██║░╚██╗
╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░╚═════╝░░╚════╝░░╚════╝░╚═╝░░╚═╝

1.1 var configuration

1.2 game settings

1.3 Commands and other settings  { 

Guide for commands:
- !lock (Lock the room | Only adm)
- !unlock (Unlock the room | Only adm)
- !clear (Clear all bans | Only adm)
- !discord (Show discord link)
- !consudfutsal (Give you admin in room)

To set a team jersey:
- !Team Color (Red or blue)
Examples: !UTred, !UTblue, !tmvred, !tmvblue, !aWred, !aWblue
}

1.4 Teams´s Jersey {
  Available tems:
AR: UT | RN | vB | PLA | TFC | CT | NSP | FU | A&O | NOB | GOD | RP | MJ | gsw |
BR: sX | KH | tmv | aW | RM | LM | allstars | CRF | dL | rX | oP | crvg | LH4Q | IT | INL | Fxp | GX |
}

1.5 Anti racism System 

1.6 End of code


###################################################################################################
*/ 







 // ###################################################################################################
 // 1.1 var configuration

 var room = HBInit ( { roomName: "✖✖✖ CONSUDFUT ARENA ✖✖✖", maxPlayers: 18, noPlayer: true, public : true, geo : {
    code: 'xk',
    lon: -58.3712,
    lat: -34.6083
    } } );


var colorADM = 0xC2321E;
var AnnouncementColor = 0x14E8B8;
var banColor = 0x16EA0F;
var lockColor = 0xEA7D0F;
var unlockColor = 0x0F20EA;
var camisetaColor = 0xC234E8;
var banPunishment = false;

// ###################################################################################################







// ###################################################################################################
// 1.2 game settings

room.setDefaultStadium("Classic");
room.setScoreLimit(0);
room.setTimeLimit(6);
room.setTeamsLock(true);

// ###################################################################################################







// ###################################################################################################
// 1.3 Commands and other settings
function updateAdmins() {
    var players = room.getPlayerList().filter((player) => player.id != 0 );
    if ( players.length == 0 ) return; // 
    if ( players.find((player) => player.admin) != null ) return; 
    room.setPlayerAdmin(players[0].id, true);  
} // If anyone is in the room, this command will give adm to the first person who enter



room.onPlayerJoin = function(player) {
    updateAdmins(); 
    room.sendAnnouncement("• [PV] Hi @" + player.name + " • || Discord: https://discord.gg/5UHRTyubDU ||", player.id, AnnouncementColor, "bold" )
    room.sendAnnouncement("• [PV] !camisetas !discord •", player.id, AnnouncementColor, "bold" )
    } // Welcome message



room.onPlayerChat = function (player, message) { // Commands for chat


messageColor = message



if ( message == "!discord" ) {  
    room.sendAnnouncement("• Discord: https://discord.gg/5UHRTyubDU", player.id, AnnouncementColor, "bold" ); 
    return false;  
} //Code to enter our discord server

if ( message == "!consudfutsal" ) { 
    room.setPlayerAdmin(player.id, true);  
    room.sendAnnouncement("🤵 " + player.name + " is administrator of the room ✅", player.id=null, AnnouncementColor, "bold" ); 
    return false;  
} //Code to get admin in our room

if ( message == "!clear" && player.admin ) { 
    room.clearBans();
    room.sendAnnouncement( "✅ ALL BANS WERE REMOVED ✅", player.id=null, banColor, "bold" ); 
} //Clear bans

if ( message == "!lock" && player.admin ) { 
    room.setPassword("hitlerjorobado");  
    room.sendAnnouncement( "🔒 LOCKED ROOM 🔒", player.id=null, lockColor, "bold" ); 
} // Lock room

if (message == "!unlock" && player.admin ){ 
    room.setPassword();  
    room.sendAnnouncement("🔓 UNLOCKED ROOM 🔓", player.id=null, unlockColor, "bold"); 
} // Unlock room







// ###################################################################################################
// 1.4 Teams´s jersey


if (message == "!camisetas"){ // Command to see an example
    room.sendAnnouncement("Example: !UTred !UTblue !RNred !RNblue !PLAred !PLAblue | etc", player.id, AnnouncementColor, "bold");
} //Explicacion del comando camisetas

if (message == "!UTred" && player.admin){
    room.setTeamColors(1, 0, 0xFFFFFF, [0x000000]);
    room.sendAnnouncement("🔴 UT's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta UT RED

if (message == "!UTblue" && player.admin){
    room.setTeamColors(2, 0, 0xFFFFFF, [0x000000]);
    room.sendAnnouncement("🔵 UT's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta UT BLUE

if (message == "!RNred" && player.admin){
    room.setTeamColors(1, 0, 0x7A7A7A, [0x070807, 0xFCFEFF, 0x000000]);
    room.sendAnnouncement("🔴 RN's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta RN RED

if (message == "!RNblue" && player.admin){
    room.setTeamColors(2, 0, 0x7A7A7A, [0x070807, 0xFCFEFF, 0x000000]);
    room.sendAnnouncement("🔵 RN's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta RN BLUE

if (message == "!VBred" && player.admin){
    room.setTeamColors(1, 45, 0xFFFFFF, [0x35439C]);
    room.sendAnnouncement("🔴 vB's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta vB RED

if (message == "!VBblue" && player.admin){
    room.setTeamColors(2, 45, 0xFFFFFF, [0x35439C]);
    room.sendAnnouncement("🔵 vB's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta vB BLUE

if (message == "!PLAred" && player.admin){
    room.setTeamColors(1, 90, 0x000000, [0xffffff, 0x875c33, 0xffffff]);
    room.sendAnnouncement("🔴 PLA's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta PLA RED

if (message == "!PLAblue" && player.admin){
    room.setTeamColors(2, 90, 0x000000, [0xffffff, 0x875c33, 0xffffff]);
    room.sendAnnouncement("🔵 PLA's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta PLA BLUE

if (message == "!TFCred" && player.admin){
    room.setTeamColors(1, 60, 0xFFFCFC, [0xF2F2F2, 0xDE56E3, 0xDE56E3]);
    room.sendAnnouncement("🔴 TFC's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta TFC RED

if (message == "!TFCblue" && player.admin){
    room.setTeamColors(2, 60, 0xFFFCFC, [0xF2F2F2, 0xDE56E3, 0xDE56E3]);
    room.sendAnnouncement("🔵 TFC's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta TFC BLUE

if (message == "!CTred" && player.admin){
    room.setTeamColors(1, 44, 0xFFFFFF, [0x050404, 0xB5B5B5, 0xFAF3F6]);
    room.sendAnnouncement("🔴 CT's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta CT RED

if (message == "!CTblue" && player.admin){
    room.setTeamColors(2, 44, 0xFFFFFF, [0x050404, 0xB5B5B5, 0xFAF3F6]);
    room.sendAnnouncement("🔵 CT's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta CT BLUE

if (message == "!NSPred" && player.admin){
    room.setTeamColors(1, 0, 0xFFFFFF, [0xF70000, 0x000000]);
    room.sendAnnouncement("🔴 NSP's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta NSP RED

if (message == "!NSPblue" && player.admin){
    room.setTeamColors(2, 0, 0xFFFFFF, [0xF70000, 0x000000]);
    room.sendAnnouncement("🔵 NSP's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta NSP BLUE

if (message == "!FUred" && player.admin){
    room.setTeamColors(1, 0, 0xFF0000, [0x000000, 0x000000, 0x000000]);
    room.sendAnnouncement("🔴 FU's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta FU RED


if (message == "!FUblue" && player.admin){
    room.setTeamColors(2, 0, 0xFF0000, [0x000000, 0x000000, 0x000000]);
    room.sendAnnouncement("🔵 FU's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta FU 

if (message == "!ayored" && player.admin){
    room.setTeamColors(1, 120, 0xFCD537, [0x001E4D, 0x001D4A, 0x082361]);
    room.sendAnnouncement("🔴 A&O's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta ayo RED

if (message == "!ayoblue" && player.admin){
    room.setTeamColors(2, 120, 0xFCD537, [0x001E4D, 0x001D4A, 0x082361]);
    room.sendAnnouncement("🔵 A&O's jersey was established on the red team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta ayo BLUE

if (message == "!NOBred" && player.admin){
    room.setTeamColors(1, 0, 0xFFFFFF, [0xFF0000, 0x000000]);
    room.sendAnnouncement("🔴 NOB's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta NOB RED

if (message == "!NOBblue" && player.admin){
    room.setTeamColors(2, 0, 0xFFFFFF, [0xFF0000, 0x000000]);
    room.sendAnnouncement("🔵 NOB's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta NOB BLUE

if (message == "!GODred" && player.admin){
    room.setTeamColors(1, 60, 0xFFA64D, [0x191919, 0x0D0D0D, 0x030303]);
    room.sendAnnouncement("🔴 GOD's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta GOD RED

if (message == "!GODblue" && player.admin){
    room.setTeamColors(2, 60, 0xFFA64D, [0x191919, 0x0D0D0D, 0x030303]);
    room.sendAnnouncement("🔵 GOD's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta GOD BLUE

if (message == "!RPred" && player.admin){
    room.setTeamColors(1, 45, 0x0B0B0B, [0xE4E6EE, 0xF42237, 0xE4E6EE]);
    room.sendAnnouncement("🔴 RP's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta RP RED

if (message == "!RPblue" && player.admin){
    room.setTeamColors(2, 45, 0x0B0B0B, [0xE4E6EE, 0xF42237, 0xE4E6EE]);
    room.sendAnnouncement("🔵 RP's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta RP RED

if (message == "!MJred" && player.admin){
    room.setTeamColors(1, 60, 0xFD0069, [0xFDFDFD, 0xF0F0F0, 0xE0E0E0]);
    room.sendAnnouncement("🔴 MJ's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta MJ RED

if (message == "!MJblue" && player.admin){
    room.setTeamColors(2, 60, 0xFD0069, [0xFDFDFD, 0xF0F0F0, 0xE0E0E0]);
    room.sendAnnouncement("🔵 MJ's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta MJ BLUE

if (message == "!gswred" && player.admin){
    room.setTeamColors(1, 00, 0xF6C43C, [0x1B316E, 0x1C348D, 0x1B316E]);
    room.sendAnnouncement("🔴 gsw's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta gsw RED

if (message == "!gswblue" && player.admin){
    room.setTeamColors(2, 00, 0xF6C43C, [0x1B316E, 0x1C348D, 0x1B316E]);
    room.sendAnnouncement("🔵 gsw's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta gsw blue

if (message == "!sXred" && player.admin){
    room.setTeamColors(1, 60, 0x000000, [0xFB002C, 0xE20020, 0xCF021E]);
    room.sendAnnouncement("🔴 sX's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta sX RED

if (message == "!sXblue" && player.admin){
    room.setTeamColors(2, 60, 0x000000, [0xFB002C, 0xE20020, 0xCF021E]);
    room.sendAnnouncement("🔵 sX's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta sX BLUE

if (message == "!KHred" && player.admin){
    room.setTeamColors(1, 0, 0x000000, [0xFF0000, 0xF5F500, 0X00FF00]);
    room.sendAnnouncement("🔴 KH's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta KH RED

if (message == "!KHblue" && player.admin){
    room.setTeamColors(2, 0, 0x000000, [0xFF0000, 0xF5F500, 0X00FF00]);
    room.sendAnnouncement("🔵 KH's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta KH BLUE

if (message == "!tmvred" && player.admin){
    room.setTeamColors(1, 45, 0xFA21A4, [0xF9FFFD, 0xFFDCFF, 0XFABEFE]);
    room.sendAnnouncement("🔴 tmv's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta tmv RED

if (message == "!tmvblue" && player.admin){
    room.setTeamColors(2, 45, 0xFA21A4, [0xF9FFFD, 0xFFDCFF, 0XFABEFE]);
    room.sendAnnouncement("🔵 tmv's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta tmv BLUE

if (message == "!aWred" && player.admin){
    room.setTeamColors(1, 60, 0xFFFFFF, [0x000000, 0x004077, 0x000000]);
    room.sendAnnouncement("🔴 aW's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta aW RED

if (message == "!aWblue" && player.admin){
    room.setTeamColors(2, 60, 0xFFFFFF, [0x000000, 0x004077, 0x000000]);
    room.sendAnnouncement("🔵 aW's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta aW BLUE

if (message == "!RMred" && player.admin){
    room.setTeamColors(1, 26, 0xF2F2F2, [0x2A64EB, 0x1E77EB]);
    room.sendAnnouncement("🔴 RM's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta RM RED

if (message == "!RMblue" && player.admin){
    room.setTeamColors(2, 26, 0xF2F2F2, [0x2A64EB, 0x1E77EB]);
    room.sendAnnouncement("🔵 RM's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta RM blue

if (message == "!LMred" && player.admin){
    room.setTeamColors(1, 60, 0xFF6600, [0x1C1C1C, 0x0F0F0F, 0x141414]);
    room.sendAnnouncement("🔴 LM's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta LM RED

if (message == "!LMblue" && player.admin){
    room.setTeamColors(2, 60, 0xFF6600, [0x1C1C1C, 0x0F0F0F, 0x141414]);
    room.sendAnnouncement("🔵 LM's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta LM BLUE

if (message == "!allstarsred" && player.admin){
    room.setTeamColors(1, 60, 0x0000, [0xE6FF05]);
    room.sendAnnouncement("🔴 All Stars's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta All Stars RED

if (message == "!allstarsblue" && player.admin){
    room.setTeamColors(2, 60, 0x0000, [0xE6FF05]);
    room.sendAnnouncement("🔵 All Stars's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta All Stars BLUE

if (message == "!CRFred" && player.admin){
    room.setTeamColors(1, 90, 0xFFFAFA, [0xFF0000, 0x000000, 0xFF0000]);
    room.sendAnnouncement("🔴 CRF's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta CRF RED

if (message == "!CRFblue" && player.admin){
    room.setTeamColors(2, 90, 0xFFFAFA, [0xFF0000, 0x000000, 0xFF0000]);
    room.sendAnnouncement("🔵 CRF's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta CRF BLUE

if (message == "!dLred" && player.admin){
    room.setTeamColors(1, 30, 0xDB0000, [0xFCFCFC, 0x160987, 0xFCFCFC]);
    room.sendAnnouncement("🔴 Da Lhe's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta dL RED

if (message == "!dLblue" && player.admin){
    room.setTeamColors(2, 30, 0xDB0000, [0xFCFCFC, 0x160987, 0xFCFCFC]);
    room.sendAnnouncement("🔵 Da Lhe's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta dL BLUE

if (message == "!rXred" && player.admin){
    room.setTeamColors(1, 40, 0xF7F3F2, [0x33EBFF, 0x2DD1E3, 0x13C3D6]);
    room.sendAnnouncement("🔴 rX's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta rX RED

if (message == "!rXblue" && player.admin){
    room.setTeamColors(2, 40, 0xF7F3F2, [0x33EBFF, 0x2DD1E3, 0x13C3D6]);
    room.sendAnnouncement("🔵 rX's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta rX BLUE

if (message == "!oPred" && player.admin){
    room.setTeamColors(1, 60, 0x73FF30, [0x000000]);
    room.sendAnnouncement("🔴 oP's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta oP RED

if (message == "!oPblue" && player.admin){
    room.setTeamColors(2, 60, 0x73FF30, [0x000000]);
    room.sendAnnouncement("🔵 oP's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta oP BLUE

if (message == "!crvgred" && player.admin){
    room.setTeamColors(1, 45, 0xFF0000, [0xFFFFFF, 0x000000, 0xFFFFFF]);
    room.sendAnnouncement("🔴 crvg's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta crvg RED

if (message == "!crvgblue" && player.admin){
    room.setTeamColors(2, 45, 0xFF0000, [0xFFFFFF, 0x000000, 0xFFFFFF]);
    room.sendAnnouncement("🔵 crvg's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta crvg BLUE

if (message == "!LH4Qred" && player.admin){
    room.setTeamColors(1, 130, 0xFFFFFF, [0xFF00F7, 0xFF00F7, 0x000000]);
    room.sendAnnouncement("🔴 LH4Q's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta LH4Q RED

if (message == "!LH4Qblue" && player.admin){
    room.setTeamColors(2, 130, 0xFFFFFF, [0xFF00F7, 0xFF00F7, 0x000000]);
    room.sendAnnouncement("🔵 LH4Q's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta LH4Q BLUE

if (message == "!ITred" && player.admin){
    room.setTeamColors(1, 60, 0xAB8900, [0x000000, 0x0A0A0A]);
    room.sendAnnouncement("🔴 IT's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta IT RED

if (message == "!ITblue" && player.admin){
    room.setTeamColors(2, 60, 0xAB8900, [0x000000, 0x0A0A0A]);
    room.sendAnnouncement("🔵 IT's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta IT BLUE 

if (message == "!INLred" && player.admin){
    room.setTeamColors(1, 60, 0xFFFFFF, [0xC4C0C3, 0x000000, 0xC4C0C3]);
    room.sendAnnouncement("🔴 INL's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta IT RED

if (message == "!INLblue" && player.admin){
    room.setTeamColors(2, 60, 0xFFFFFF, [0xC4C0C3, 0x000000, 0xC4C0C3]);
    room.sendAnnouncement("🔵 INL's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta IT BLUE

if (message == "!Fxpred" && player.admin){
    room.setTeamColors(1, 180, 0xDBA933, [0x000000, 0x1C1C1C, 0x000000]);
    room.sendAnnouncement("🔴 Fxp's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta Fxp RED

if (message == "!Fxpblue" && player.admin){
    room.setTeamColors(2, 180, 0xDBA933, [0x000000, 0x1C1C1C, 0x000000]);
    room.sendAnnouncement("🔵 Fxp's jersey was established on the blue team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta Fxp BLUE

if (message == "!GXred" && player.admin){
    room.setTeamColors(1, 60, 0x6829A6, [0x000103]);
    room.sendAnnouncement("🔴 GX's jersey was established on the red team 🔴", player.id=null, camisetaColor, "bold");
} //Camiseta GX RED

if (message == "!GXblue" && player.admin){
    room.setTeamColors(2, 60, 0x6829A6, [0x000103]);
    room.sendAnnouncement("🔵 GX's jersey was established on the red team 🔵", player.id=null, camisetaColor, "bold");
} //Camiseta GX BLUE


// ###################################################################################################







// ###################################################################################################
// 1.5 Anti racism System 


if (message == "macaco"){
    return false;
}

if (message == "macac0"){
    return false;
}

if (message == "m4caco"){
    return false;
}

if (message == "m4cac0"){
    return false;
}

if (message == "estupido"){
    return false;
}

if (message == "3stupido"){
    return false;
}

if (message == "estupid0"){
    return false;
}

if (message == "3stup1d0"){
    return false;
}

if (message == "down"){
    return false;
}

if (message == "d0wn"){
    return false;
}

if (message == "mono"){
    return false;
}

if (message == "m0no"){
    return false;
}

if (message == "mon0"){
    return false;
}

if (message == "fdp"){
    return false;
}

if (message == "hdp"){
    return false;
}

if (message == "filho da puta"){
    return false;
}

if (message == "hijo de puta"){
    return false;
}

if (message == "hijo d puta"){
    return false;
}

if (message == "mogolico"){
    return false;
}

if (message == "mogolic0"){
    return false;
}

if (message == "m0golico"){
    return false;
}


if (message == "m0golic0"){
    return false;
}


if (message == "m0g0lic0"){
    return false;
}


if (message == "m0g0l1c0"){
    return false;
}


// ###################################################################################################







// ###################################################################################################
// 1.6 End of code
    


if (messageColor.startsWith("!")) {
    return false;
} // Don´t return message if it start with !

room.onPlayerLeave = function(player) {
    updateAdmins();
} // Update admins if someones leaves


}


// ###################################################################################################


