import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import ContactPage from './page';



describe("render Contact page", () => {

    const onSubmit = jest.fn();
   
    beforeEach(() => {
        render(<ContactPage />)
    })

    afterEach(() => {
        onSubmit.mockReset();
    })

    it("render a heading", () => {       

        const text = screen.getByRole('heading', { name: 'Contact us' });
        expect(text).toBeInTheDocument();
    });

    it("should show a form with valid inputs", ()=>{
        expect(screen.getByPlaceholderText(/Enter your name/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Message/i)).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /Send/i})).toBeInTheDocument();
    });
       
    it("should update the input value on change", async ()=>{
        const input = screen.getByPlaceholderText(/Enter your name/i)
        
        await userEvent.type(input, 'user123');
        expect(input.value).toBe('user123')
    });
       
})
