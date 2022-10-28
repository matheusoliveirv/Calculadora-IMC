import { level } from "../../helpers/imc";
import custom from './GridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Propriedades = {
    item: level
};

export const GridItem = ({item}: Propriedades) => {
    return(
        <div className={custom.main} //style={{backgroundColor: item.color}}
        >
            <div className={custom.gridIcon} style={{backgroundColor: item.color}}>
                <img src={item.icon === 'up' ? upImage : downImage} alt="" />
            </div>
            <div className={custom.gridTitle}>{item.title}</div>

            {item.yourIMC &&
                <div className={custom.yourIMC}>Seu IMC é de {item.yourIMC}</div>
            }

            <div className={custom.gridInfo}>
                <>
                   IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
}