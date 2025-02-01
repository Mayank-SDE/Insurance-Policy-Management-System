/* eslint-disable react/prop-types */
import styles from './ButtonsContainer.module.css';
const ButtonsContainer = ({onButtonClick}) => {

    const buttonNames=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];

  return (
        <div className={styles['buttons-container']}>
        {
            buttonNames.map(buttonName=>{
                return <button onClick={()=>onButtonClick(buttonName)} key={buttonName} className={styles.button}>{buttonName}</button>;
        
            })
        }
      </div>
        )
}

export default ButtonsContainer