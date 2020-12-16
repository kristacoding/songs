module.exports = function (sequelize, DataTypes) {
    var Song = sequelize.define("Song", {
        artist: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        title: {
            type: DataTypes.STRING, 
            allowNull: false, 
            validate: {
                len: [1]
            }
        },
        genre: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false, 
        }
    });
    return Song;
}