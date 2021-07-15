import Card from './components/Card'

function App() {

  const imageURLs = [
    'https://media.cntraveler.com/photos/5ff68990d4c9d6b1c5a390b6/16:9/w_2560%2Cc_limit/alexforestier-2020-1.jpg',
    'https://lp-cms-production.imgix.net/2020-11/wildcamping.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQedOSleSlZnEDN9tIFDz20_CbgZ6fS9Fi2hA&usqp=CAU',
    'https://img1.10bestmedia.com/Images/Photos/379809/GettyImages-904960682_54_990x660.jpg'
  ]

  return (
    <div className="App redcolor">

      <Card img={imageURLs[0]} title={"My Fancy Camping Trip"} caption={"This was such a good trip"} />
      <Card img={imageURLs[1]} title={"Wow What An Adventure"} caption={"Super amazing!"} />
      <Card img={imageURLs[2]} title={"OMG"} caption={"Super amazing!"} />
      <Card img={imageURLs[3]} caption={"Super amazing!"} /> 

    </div>
  );

}

export default App;
