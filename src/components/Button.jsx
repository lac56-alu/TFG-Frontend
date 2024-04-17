import styles from '../style'

const Button = () => {
  const redirectRates = () => {
    window.location.href = '/rates';
  };

  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] 
                                      text-primary outline-none ${styles} rounded-[10px]`} onClick={redirectRates}>
      Ver tarifas
    </button>
  )
}

export default Button
