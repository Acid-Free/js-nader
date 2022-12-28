const mine = {
    gold: 3
    , left: {
        gold: 2
        , left: {
            gold: 4
        }
        , right: {
            gold: 1
        }
    }
    , right: {
        gold: 5,
        right: {
            gold: 1
        }
    }
};

const countGold = (room => {
    if (room == null)
        return 0;

    return room.gold + countGold(room.left) + countGold(room.right);
});

console.log(countGold(mine));
// console.log(mine.right.left);