
function House(nickName, imgSrc, address, city, state, zipCode, forSale, salePrice, estimatedPrice, estimatedMortgage, imgWidth, discount){
		this.nickName = nickName;
        this.imgSrc = imgSrc;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.forSale = forSale;
        this.salePrice = salePrice;
        this.estimatedPrice = estimatedPrice;
        this.discount = discount;
        this.estimatedMortgage = estimatedMortgage;
        this.imgWidth = imgWidth
}

var houses=[];
houses.push(new House('The Villa', 'http://photos3.zillowstatic.com/p_h/IShf3c5r7s3xw60000000000.jpg', '4747 Nortside Dr.', 'Atlanta', 'GA', '30327', 'For Sale', '2,999,000', '4,031,664', '11,179/mo', '300', (100 - (2999000/4031664) *100).toFixed(2)));
houses.push(new House('The Pool House', 'http://photos2.zillowstatic.com/p_h/IS1n6j1pnfqv2b1000000000.jpg', '1101 Garmon Dr', 'Atlanta', 'GA', '30327', 'For Sale', '2,399,000', '2,684,662', '8,943/mo', '300', (100 - (2399000/2684662) *100).toFixed(2)));
houses.push(new House('The Awesome House', 'http://ak.t1.tiles.virtualearth.net/tiles/cmd/ObliqueHybrid?a=03200231131-48125-20-101&g=4510', '914 Davis Dr', 'Atlanta', 'GA', '30327', 'NOT for Sale', '-', '2,134,055', '-', '200', '-'));
houses.push(new House('Versailles', 'http://photos3.zillowstatic.com/p_h/ISx35uo0fixyhb0000000000.jpg', '5115 Northside Dr', 'Atlanta', 'GA', '30327', 'For Sale', '8,000,000', '12,360,014', '29,821/mo', '200', (100 - (8000000/12360014) *100).toFixed(2)));
