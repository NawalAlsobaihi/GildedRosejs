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
        const isNormalItem = !isAgedBrie && !isBackstagePasses && !isSulfuras;
  
        if (isNormalItem) {
          if (isQualityBiggerThan0) {
            item.quality--;
  
            if (areNoMoreDaysToSell) {
              item.quality--;
            }
          }
        } else if (isBackstagePasses) {
          item.quality++;
          if (tenDaysOrLessToSell) {
            item.quality++;
          }
  
          if (fiveDaysOrLessToSell) {
            item.quality++;
          }
  
          if (areNoMoreDaysToSell) {
            item.quality = 0;
          }
        } else if (isAgedBrie && isQualityLessThan50) {
          item.quality++;
        }
      });
  
      return this.items;
    }
  }
  
  module.exports = {
    Item,
    Shop
  }