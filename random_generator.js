function stringGen(len)
{
    var text = "Here is your verification code:\n\n@G2U_";

    var charset = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789#$%&?";

    for( var i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
}

alert(stringGen(8));