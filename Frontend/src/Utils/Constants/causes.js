//BORRAR CUANDO SE ENCUENTRE FUNCIONAL

const CAUSES_INFO = [
  {
    "id" : 1,
    show : false,
    "image" : "data:image/jpeg;base64,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",
    "title" : "Causa listada A",
    "subtitle" : "ONG A",
    "state" : "Live",
    "description" : "orem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate quis lorem sed tristique. Vestibulum hendrerit vitae mi et tristique. Aliquam erat volutpat. Nunc sollicitudin tincidunt ante in tincidunt. Vivamus eget ligula pellentesque lacus tristique sollicitudin. In aliquam risus ac justo porta, at luctus mauris vestibulum. Duis condimentum mi vitae neque cursus placerat. Nam nibh magna, tristique at est ac, lacinia volutpat dui. In sed enim eu nibh porttitor tincidunt vel ut libero. Donec quis felis eu enim pellentesque gravida in et ligula. Morbi porta, velit eu ultrices porta, lacus augue fringilla felis, id gravida risus leo vel urna. Proin dictum, augue quis laoreet mollis, elit mi viverra purus, ac volutpat leo nisi ut mauris. Pellentesque finibus turpis non odio tincidunt, vel interdum eros posuere. Fusce facilisis auctor ipsum, vel mattis nunc pulvinar eget. Morbi odio diam, vehicula vitae nisl eget, fermentum blandit leo. Phasellus pharetra libero a laoreet volutpat.",
    "collection" : [
      {
        nftTitle : "N1",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBSvZZp18wtEy_J_K_yP-lpeoN8y7llHa2tynzXYRY1PrRGovQ8qJdzhY7ePvkEslCHg&usqp=CAU",
        quantity : 10,
        minted : 9,
        price: 200,
        description : "orem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate quis lorem sed tristique. Vestibulum hendrerit vitae mi et tristique. Aliquam erat volutpat. Nunc sollicitudin tincidunt ante in tincidunt. Vivamus eget ligula pellentesque lacus tristique sollicitudin. In aliquam risus ac justo porta, at luctus mauris vestibulum. Duis condimentum mi vitae neque cursus placerat. Nam nibh magna, tristique at est ac, lacinia volutpat dui. In sed enim eu nibh porttitor tincidunt vel ut libero. Donec quis felis eu enim pellentesque gravida in et ligula. Morbi porta, velit eu ultrices porta, lacus augue fringilla felis, id gravida risus leo vel urna. Proin dictum, augue quis laoreet mollis, elit mi viverra purus, ac volutpat leo nisi ut mauris. Pellentesque finibus turpis non odio tincidunt, vel interdum eros posuere. Fusce facilisis auctor ipsum, vel mattis nunc pulvinar eget. Morbi odio diam, vehicula vitae nisl eget, fermentum blandit leo. Phasellus pharetra libero a laoreet volutpat."
      },
      {
        nftTitle : "N2",
        image : "https://gcon4.com/wp-content/uploads/2019/04/ONG-1.jpg",
        quantity : 190,
        minted : 19,
        price : 200,
        description : "orem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate quis lorem sed tristique. Vestibulum hendrerit vitae mi et tristique. Aliquam erat volutpat. Nunc sollicitudin tincidunt ante in tincidunt. Vivamus eget ligula pellentesque lacus tristique sollicitudin. In aliquam risus ac justo porta, at luctus mauris vestibulum. Duis condimentum mi vitae neque cursus placerat. Nam nibh magna, tristique at est ac, lacinia volutpat dui. In sed enim eu nibh porttitor tincidunt vel ut libero. Donec quis felis eu enim pellentesque gravida in et ligula. Morbi porta, velit eu ultrices porta, lacus augue fringilla felis, id gravida risus leo vel urna. Proin dictum, augue quis laoreet mollis, elit mi viverra purus, ac volutpat leo nisi ut mauris. Pellentesque finibus turpis non odio tincidunt, vel interdum eros posuere. Fusce facilisis auctor ipsum, vel mattis nunc pulvinar eget. Morbi odio diam, vehicula vitae nisl eget, fermentum blandit leo. Phasellus pharetra libero a laoreet volutpat."
      },
      {
        nftTitle : "N3",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShdRc16xmP68f6uK6kxf5OaGUsfAHz0srQVFBIwF9Phn7cZTl27hm2EGYM5x1dH24kpUo&usqp=CAU",
        quantity : 100,
        minted : 90,
        price : 200,
        description : "orem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate quis lorem sed tristique. Vestibulum hendrerit vitae mi et tristique. Aliquam erat volutpat. Nunc sollicitudin tincidunt ante in tincidunt. Vivamus eget ligula pellentesque lacus tristique sollicitudin. In aliquam risus ac justo porta, at luctus mauris vestibulum. Duis condimentum mi vitae neque cursus placerat. Nam nibh magna, tristique at est ac, lacinia volutpat dui. In sed enim eu nibh porttitor tincidunt vel ut libero. Donec quis felis eu enim pellentesque gravida in et ligula. Morbi porta, velit eu ultrices porta, lacus augue fringilla felis, id gravida risus leo vel urna. Proin dictum, augue quis laoreet mollis, elit mi viverra purus, ac volutpat leo nisi ut mauris. Pellentesque finibus turpis non odio tincidunt, vel interdum eros posuere. Fusce facilisis auctor ipsum, vel mattis nunc pulvinar eget. Morbi odio diam, vehicula vitae nisl eget, fermentum blandit leo. Phasellus pharetra libero a laoreet volutpat."
      },
    ]
  },
  {
    "id" : 2,
    show : true,
    "image" : "https://www.la-prensa.com.mx/mundo/acddmy-ninas-migrantes.jpg/ALTERNATES/LANDSCAPE_400/ni%C3%B1as-migrantes.jpg",
    "title" : "Causa listada B",
    "subtitle" : "ONG B",
    "state" : "Live",
    "description" : "Ut eget fringilla nulla. Integer id fermentum felis. Vivamus porta, ante eu interdum lacinia, nunc quam posuere ex, nec feugiat dolor odio at ex. Aenean nibh eros, finibus luctus nunc porta, condimentum venenatis turpis. Curabitur pharetra dolor in orci convallis, eu molestie arcu volutpat. Suspendisse commodo ut mauris vel faucibus. Proin hendrerit elit eu mauris venenatis, lobortis dapibus orci suscipit. Integer felis urna, bibendum sit amet nibh id, sollicitudin blandit leo.",
    "collection" : [
      {
        nftTitle : "N1",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBSvZZp18wtEy_J_K_yP-lpeoN8y7llHa2tynzXYRY1PrRGovQ8qJdzhY7ePvkEslCHg&usqp=CAU",
        quantity : 10,
        minted : 9,
        price: 200,
        description : "orem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate quis lorem sed tristique. Vestibulum hendrerit vitae mi et tristique. Aliquam erat volutpat. Nunc sollicitudin tincidunt ante in tincidunt. Vivamus eget ligula pellentesque lacus tristique sollicitudin. In aliquam risus ac justo porta, at luctus mauris vestibulum. Duis condimentum mi vitae neque cursus placerat. Nam nibh magna, tristique at est ac, lacinia volutpat dui. In sed enim eu nibh porttitor tincidunt vel ut libero. Donec quis felis eu enim pellentesque gravida in et ligula. Morbi porta, velit eu ultrices porta, lacus augue fringilla felis, id gravida risus leo vel urna. Proin dictum, augue quis laoreet mollis, elit mi viverra purus, ac volutpat leo nisi ut mauris. Pellentesque finibus turpis non odio tincidunt, vel interdum eros posuere. Fusce facilisis auctor ipsum, vel mattis nunc pulvinar eget. Morbi odio diam, vehicula vitae nisl eget, fermentum blandit leo. Phasellus pharetra libero a laoreet volutpat."
      },
      {
        nftTitle : "N2",
        image : "https://gcon4.com/wp-content/uploads/2019/04/ONG-1.jpg",
        quantity : 190,
        minted : 19,
        price : 200,
        description : "orem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate quis lorem sed tristique. Vestibulum hendrerit vitae mi et tristique. Aliquam erat volutpat. Nunc sollicitudin tincidunt ante in tincidunt. Vivamus eget ligula pellentesque lacus tristique sollicitudin. In aliquam risus ac justo porta, at luctus mauris vestibulum. Duis condimentum mi vitae neque cursus placerat. Nam nibh magna, tristique at est ac, lacinia volutpat dui. In sed enim eu nibh porttitor tincidunt vel ut libero. Donec quis felis eu enim pellentesque gravida in et ligula. Morbi porta, velit eu ultrices porta, lacus augue fringilla felis, id gravida risus leo vel urna. Proin dictum, augue quis laoreet mollis, elit mi viverra purus, ac volutpat leo nisi ut mauris. Pellentesque finibus turpis non odio tincidunt, vel interdum eros posuere. Fusce facilisis auctor ipsum, vel mattis nunc pulvinar eget. Morbi odio diam, vehicula vitae nisl eget, fermentum blandit leo. Phasellus pharetra libero a laoreet volutpat."
      },
      {
        nftTitle : "N3",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShdRc16xmP68f6uK6kxf5OaGUsfAHz0srQVFBIwF9Phn7cZTl27hm2EGYM5x1dH24kpUo&usqp=CAU",
        quantity : 100,
        minted : 90,
        price : 200,
        description : "orem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate quis lorem sed tristique. Vestibulum hendrerit vitae mi et tristique. Aliquam erat volutpat. Nunc sollicitudin tincidunt ante in tincidunt. Vivamus eget ligula pellentesque lacus tristique sollicitudin. In aliquam risus ac justo porta, at luctus mauris vestibulum. Duis condimentum mi vitae neque cursus placerat. Nam nibh magna, tristique at est ac, lacinia volutpat dui. In sed enim eu nibh porttitor tincidunt vel ut libero. Donec quis felis eu enim pellentesque gravida in et ligula. Morbi porta, velit eu ultrices porta, lacus augue fringilla felis, id gravida risus leo vel urna. Proin dictum, augue quis laoreet mollis, elit mi viverra purus, ac volutpat leo nisi ut mauris. Pellentesque finibus turpis non odio tincidunt, vel interdum eros posuere. Fusce facilisis auctor ipsum, vel mattis nunc pulvinar eget. Morbi odio diam, vehicula vitae nisl eget, fermentum blandit leo. Phasellus pharetra libero a laoreet volutpat."
      },
    ]
  },
  {
    "id" : 3,
    show : true,
    "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV2xyibPq3qTJPaqLCBZ2CWcgy2sPV82MUzg&usqp=CAU",
    "title" : "Causa listada C",
    "subtitle" : "ONG C",
    "state" : "Soon",
    "description" : "Morbi congue scelerisque rhoncus. Ut lacinia nibh metus, vel placerat velit fermentum eget. In vel velit sit amet elit vulputate interdum. Duis sodales velit viverra urna placerat, in molestie leo efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in pulvinar dolor. Vivamus pretium mattis sem, et pulvinar lectus commodo ac. Sed a tincidunt quam. Vestibulum sit amet nulla at metus maximus lobortis. Vivamus ac odio sed leo tristique placerat vitae non sem. Curabitur fermentum magna vitae finibus elementum. Integer tincidunt, enim sit amet dignissim pharetra, lectus enim molestie lacus, a bibendum nisl dolor at sem. Praesent at aliquam diam, nec laoreet lectus.",
    "collection" : [
      {
        nftTitle : "N1",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBSvZZp18wtEy_J_K_yP-lpeoN8y7llHa2tynzXYRY1PrRGovQ8qJdzhY7ePvkEslCHg&usqp=CAU",
        quantity : 10,
        minted : 9,
        price: 200,
        description : "orem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate quis lorem sed tristique. Vestibulum hendrerit vitae mi et tristique. Aliquam erat volutpat. Nunc sollicitudin tincidunt ante in tincidunt. Vivamus eget ligula pellentesque lacus tristique sollicitudin. In aliquam risus ac justo porta, at luctus mauris vestibulum. Duis condimentum mi vitae neque cursus placerat. Nam nibh magna, tristique at est ac, lacinia volutpat dui. In sed enim eu nibh porttitor tincidunt vel ut libero. Donec quis felis eu enim pellentesque gravida in et ligula. Morbi porta, velit eu ultrices porta, lacus augue fringilla felis, id gravida risus leo vel urna. Proin dictum, augue quis laoreet mollis, elit mi viverra purus, ac volutpat leo nisi ut mauris. Pellentesque finibus turpis non odio tincidunt, vel interdum eros posuere. Fusce facilisis auctor ipsum, vel mattis nunc pulvinar eget. Morbi odio diam, vehicula vitae nisl eget, fermentum blandit leo. Phasellus pharetra libero a laoreet volutpat."
      },
      {
        nftTitle : "N2",
        image : "https://gcon4.com/wp-content/uploads/2019/04/ONG-1.jpg",
        quantity : 190,
        minted : 19,
        price : 200,
        description : "orem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate quis lorem sed tristique. Vestibulum hendrerit vitae mi et tristique. Aliquam erat volutpat. Nunc sollicitudin tincidunt ante in tincidunt. Vivamus eget ligula pellentesque lacus tristique sollicitudin. In aliquam risus ac justo porta, at luctus mauris vestibulum. Duis condimentum mi vitae neque cursus placerat. Nam nibh magna, tristique at est ac, lacinia volutpat dui. In sed enim eu nibh porttitor tincidunt vel ut libero. Donec quis felis eu enim pellentesque gravida in et ligula. Morbi porta, velit eu ultrices porta, lacus augue fringilla felis, id gravida risus leo vel urna. Proin dictum, augue quis laoreet mollis, elit mi viverra purus, ac volutpat leo nisi ut mauris. Pellentesque finibus turpis non odio tincidunt, vel interdum eros posuere. Fusce facilisis auctor ipsum, vel mattis nunc pulvinar eget. Morbi odio diam, vehicula vitae nisl eget, fermentum blandit leo. Phasellus pharetra libero a laoreet volutpat."
      },
      {
        nftTitle : "N3",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShdRc16xmP68f6uK6kxf5OaGUsfAHz0srQVFBIwF9Phn7cZTl27hm2EGYM5x1dH24kpUo&usqp=CAU",
        quantity : 100,
        minted : 90,
        price : 200,
        description : "orem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate quis lorem sed tristique. Vestibulum hendrerit vitae mi et tristique. Aliquam erat volutpat. Nunc sollicitudin tincidunt ante in tincidunt. Vivamus eget ligula pellentesque lacus tristique sollicitudin. In aliquam risus ac justo porta, at luctus mauris vestibulum. Duis condimentum mi vitae neque cursus placerat. Nam nibh magna, tristique at est ac, lacinia volutpat dui. In sed enim eu nibh porttitor tincidunt vel ut libero. Donec quis felis eu enim pellentesque gravida in et ligula. Morbi porta, velit eu ultrices porta, lacus augue fringilla felis, id gravida risus leo vel urna. Proin dictum, augue quis laoreet mollis, elit mi viverra purus, ac volutpat leo nisi ut mauris. Pellentesque finibus turpis non odio tincidunt, vel interdum eros posuere. Fusce facilisis auctor ipsum, vel mattis nunc pulvinar eget. Morbi odio diam, vehicula vitae nisl eget, fermentum blandit leo. Phasellus pharetra libero a laoreet volutpat."
      },
    ]
  },
]


module.exports = {
  CAUSES_INFO
}