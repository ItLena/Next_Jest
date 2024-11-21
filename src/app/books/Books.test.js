import '@testing-library/jest-dom'
import BooksPage from './page'
import {getByRole, render, screen} from "@testing-library/react"

const sum = (a,b) =>{
   return a+b
};

test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4);
});
test('page rendering', () =>{
    render(<BooksPage/>)
    const main = screen.getByRole('main', {hidden: true })
    getByRole(main, 'heading',{
        name: 'The Harry Potter Books'
    });
    
   
});
// screen.getByRole('heading', { name: 'The Harry Potter Books', hidden: true });
// describe("Testing BookPage component", () =>{


//     it("render a heading", () =>{
//         render(<BooksPage/>);
//         const text = screen.getByText(/The Harry Potter Books/i);
//        expect(text).toBeInTheDocument();
//     });
    // it("render a heading inside h1", () =>{
    //     render(<BooksPage/>);
    //     const text = screen.getByRole('heading', { level: 1 })
    //    expect(text).toBeInTheDocument();
    // });
  
    // //Mocking the API responce in test 
    // jestConfig.mock('node-fetch');
    // const fetch = require('node-fetch')

    // it("get responce", async() => {
    //     fetch.mockResolvedValue({ json: () => ({ message: 'Test data' }) });
    //     const data = await fetchDataFromApi();
    //     expect(data).toEqual({ message: 'Test data' });
    // })

// })