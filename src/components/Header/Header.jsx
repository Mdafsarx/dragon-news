import moment from 'moment';
import logo from '../../assets/assets/logo.png'
const Header = () => {
    return (
        <div className='flex flex-col items-center gap-2'>
            <img src={logo} alt="" />
            <h3 className='text-2xl font-bold'>Journalism Without Fear or Favour</h3>
            <h3 className='text-2xl font-bold'>{moment().format("dddd MMM Do YY")}</h3>
        </div>
    );
};
export default Header;