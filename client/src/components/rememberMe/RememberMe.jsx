import { Root, Checkbox, Label } from './rememberMe.styled';

const RememberMe = ({ register }) => {
  return (
    <Root>
      <Checkbox type="checkbox" id="remember-me" {...register("rememberMe")} />   
			<Label htmlFor="remember-me">Remember me</Label>  
    </Root>
  );
};

export default RememberMe;