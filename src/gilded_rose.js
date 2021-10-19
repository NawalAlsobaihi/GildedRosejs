class Item {
    constructor(name, sellIn, quality){
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }
  
  class Shop {
    constructor(items=[]){
      this.items = items;
    }
    updateQuality() {
      this.items.forEach(item => {
        const isSulfuras = item.name == "Sulfuras, Hand of Ragnaros";
  
        if (!isSulfuras) {
          item.sellIn--;
        }
  
        const isAgedBrie = item.name == "Aged Brie";
        const isBackstagePasses =
          item.name == "Backstage passes to a TAFKAL80ETC concert";
        const isQualityBiggerThan0 = item.quality > 0;
        const isQualityLessThan50 = item.quality < 50;
      
        const tenDaysOrLessToSell = item.sellIn <= 10;
        const fiveDaysOrLessToSell = item.sellIn <= 5;
        const areNoMoreDaysToSell = item.sellIn < 0;
  
        if (!isAgedBrie && !isBackstagePasses) {
          if (isQualityBiggerThan0) {
            if (!isSulfuras) {
              item.quality--;
            }
          }
        } else {
          if (isQualityLessThan50) {
            item.quality++;
            if (isBackstagePasses) {
              if (tenDaysOrLessToSell) {
                if (isQualityLessThan50) {
                  item.quality++;
                }
              }
              if (fiveDaysOrLessToSell) {
                if (isQualityLessThan50) {
                  item.quality++;
                }
              }
            }
          }
        }
  
        if (areNoMoreDaysToSell) {
          if (!isAgedBrie) {
            if (!isBackstagePasses) {
              if (isQualityBiggerThan0) {
                if (!isSulfuras) {
                  item.quality--;
                }
              }
            } else {
              item.quality = 0;
            }
          } else {
            if (isQualityBiggerThan0) {
              item.quality++;
            }
          }
        }
      });
  
      return this.items;
    }
  }
  
  module.exports = {
    Item,
    Shop
  }