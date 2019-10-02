// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// return ture or false base on the validity of credit card numbers
const validateCred = (card) => {
    let same = [];
    let time2 = [];
    for (let i = card.length-2; i >= 0; i-=2) {
        if (card[i]*2 > 10) {
            time2.push(card[i]*2-9);
        } else if (card[i]*2 == 10) {
            time2.push(1);
        } else {
            time2.push(card[i]*2);
        }
    }
    for (let j = card.length-1; j >= 0; j-=2) {
        same.push(card[j]);
    }
    let mean = (same.concat(time2)).reduce((prev, curr) => (prev + curr)% 10 );
    if (mean === 0) {
        return true;
    } else {
        return false;
    }
}

validateCred(invalid1);//? 
validateCred([4485582495307772415]) //?
// return numbers of invalid credit cards
const findInvalidCards = (cards) => {
    let results = [];
    for (let i = 0; i < cards.length; i++) {
        if (validateCred(cards[i]) == false) {
            results.push(cards[i]); 
        }
    }
    return results;
}

let invalidCards = findInvalidCards(batch);//?

// return numbers of invalid credit card base on company who issued them
const idInvalidCardCompanies = (cards) => {
    const company = [3, 4, 5, 6];
    let amex = [];
    let visa = [];
    let mastercard = [];
    let discovery = [];
    let unknown = [];
    for (let i = 0; i < cards.length; i++) {
        switch (cards[i][0]) {
            case 3:
                amex.push([cards[i]]);
                break;
            case 4:
                visa.push([cards[i]]);
                break;
            case 5:
                mastercard.push([cards[i]]);
                break;
            case 6:
                discovery.push([cards[i]]);
                break;
            default:
                unknown.push([cards[i]]);
                break;
        }
    }
    return ('The following companies had issued card(s) with invalid numbers\n' + 'Amex has ' + amex.length + ' incorrect card(s)\n' + 'Vias has ' + visa.length + ' incorrect card(s)\n' + 'Mastercard has ' + mastercard.length + ' incorrect card(s)\n' + 'Discovery has ' + discovery.length + ' incorrect card(s)\n' + 'There is/are ' + unknown.length + ' unknown incorrect card(s)');
}

idInvalidCardCompanies(invalidCards);//?
