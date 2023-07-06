import './Button.css'
const Button= ({ text }) => {
    return (
      <div className='buttonContainer'>
        <button className="--btn --btn-primary hello">
          {text}
        </button>
      </div>
    );
  };
  
  export default Button;