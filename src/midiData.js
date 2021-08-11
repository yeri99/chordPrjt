import React from 'react';

function midiData() {
    var midiArr = [];
    /* MThd */
    midiArr[0] = 0x4D;
    midiArr[1] = 0x54;    
    midiArr[2] = 0x68;
    midiArr[3] = 0x64;
    /* Length */
    midiArr[4] = 0x00;
    midiArr[5] = 0x00;
    midiArr[6] = 0x00;
    midiArr[7] = 0x06;
    /* Format */
    midiArr[8] = 0x00;
    midiArr[9] = 0x00;
    /* Track Num */
    midiArr[10] = 0x00;
    midiArr[11] = 0x01;
    /* Division */
    midiArr[12] = 0x3C;
    midiArr[13] = 0x00;

    /* MTrk */
    midArr[14] = 0x4D;
    midArr[15] = 0x54;
    midArr[16] = 0x72;
    midArr[17] = 0x6B;
    /* length */
    midArr[18] = 0x00;
    midArr[19] = 0x00;
    midArr[20] = 0x00;
    midArr[21] = 0x00;
    /* delta time */
    midArr[22] = 0x00;
    /* meta event */
    midArr[23] = 0xFF;
    midArr[24] = 0x51;
    midArr[25] = 0x03;
    midArr[26] = 0x09;
    midArr[27] = 0x27;
    midArr[28] = 0xC0;
    /* delta time */
    midArr[29] = 0x00;
    /* midi event */
    midArr[30] = 0xC0;
    midArr[31] = 0x00;
    /* delta time */
    midArr[32] = 0x00;
    /* meta event */
    midArr[33] = 0xFF;
    midArr[34] = 0x58;
    midArr[35] = 0x04;
    midArr[36] = 0x04;
    midArr[37] = 0x02;
    midArr[38] = 0x18;
    midArr[39] = 0x08;

}