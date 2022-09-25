//React
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

//Style
import s from './cause.module.css';

//Bootstrap
import Button from 'react-bootstrap/Button';
import { CAUSES, COLLECTION } from '../../Utils/Constants/Routes';
import TresNft from '../../Components/Tres-Nft/tres-nft';
import MintButton from '../../Components/Mint-Button/mint-button';

// Redux actions
import { getAllVisibleCauses } from '../../redux/actions'


export default function Cause() {
  const { descriptionStyle, buttonContainer, container, collectionImage } = s;
  const { collectionContractAddress } = useParams();

  //Dispatch
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getAllVisibleCauses());
  }, [ dispatch, collectionContractAddress ]);
  const causes = useSelector(state => state.allVisibleCauses);
  const cause = causes.filter(contract => (contract.address === collectionContractAddress))[0];
  // const {  name, address } = cause;
  const imagesContracts = ["0x51710b84b3be56201b87bdf052c07ee9d334ddce", "0x2ead43c1d40ee4f642e9a558e781fd88e39b3209", "0x8c34e57d808a1c8a99a1a7fcc4d1ca6557c5e384"];
  const description = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec vulputate quis lorem sed tristique. Vestibulum hendrerit vitae mi et tristique. Aliquam erat volutpat. 
                                Nunc sollicitudin tincidunt ante in tincidunt. Vivamus eget ligula pellentesque lacus tristique sollicitudin. 
                                In aliquam risus ac justo porta, at luctus mauris vestibulum. Duis condimentum mi vitae neque cursus placerat. 
                                Nam nibh magna, tristique at est ac, lacinia volutpat dui. In sed enim eu nibh porttitor tincidunt vel ut libero. 
                                Donec quis felis eu enim pellentesque gravida in et ligula. Morbi porta, velit eu ultrices porta, lacus augue fringilla 
                                felis, id gravida risus leo vel urna. Proin dictum, augue quis laoreet mollis, elit mi viverra purus, 
                                ac volutpat leo nisi ut mauris. Pellentesque finibus turpis non odio tincidunt, vel interdum eros posuere. 
                                Fusce facilisis auctor ipsum, vel mattis nunc pulvinar eget. Morbi odio diam, vehicula vitae nisl eget, fermentum blandit leo. Phasellus pharetra libero a laoreet volutpat.`
  return(   
    <div className={container}>
      {/* <img src={image} alt={title}/> */}
      <p className="title">{cause?.name}</p>
      <p className={descriptionStyle}>{description}</p>
      <p className="title">Collection</p>
      <img className={collectionImage} src={`../../../NFT${imagesContracts.indexOf(collectionContractAddress) + 1}.png`} alt='nft'/>
      {/* <TresNft key={collectionContractAddress} id={collectionContractAddress} causes={causes}/> */}
      <div className={buttonContainer}>
        <NavLink className="nav-link" to={`${COLLECTION}/${collectionContractAddress}`}>
          <Button className="generalButton" variant="primary">Full Collection</Button>
        </NavLink>
        <MintButton collectionContractAddress={collectionContractAddress}/>
        <NavLink className="nav-link" to={CAUSES}>
          <Button className="generalButton" variant="primary">All Causes</Button>
        </NavLink>
      </div>
    </div>
  )
}