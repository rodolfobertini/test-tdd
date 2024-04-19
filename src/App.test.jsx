import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LoginForm from "./App";
import * as utils from "./utils";
import userEvent from '@testing-library/user-event';




it('todo - O botão de login deve disparar a função login(), com os dados necessários.', () => {
// inserir um spy no login
  const loginSpy = vi.spyOn(utils, 'login');
 
 
  render(<LoginForm/>) 
 const btn = screen.getByRole('button');
 
 btn.click();

 expect(loginSpy).toHaveBeenCalled()
}
)

it('todo - O botão de login deve disparar a função login(), com os dados necessários.', async () => {
  // inserir um spy no login
    const loginSpy = vi.spyOn(utils, 'login');   
   
   render(<LoginForm/>) 
   const btn = screen.getByRole('button');
   const emailInput = screen.getByLabelText(/email/i);
   const passwordInput = screen.getByLabelText(/password/i);
   
  await act(async () => {
    await userEvent.type(emailInput, 'mail@mail.com');
    await userEvent.type(passwordInput, '123');
    await userEvent.click(btn);
})   
   btn.click();
  
   expect(loginSpy).toHaveBeenCalled({

   })
  }
  )