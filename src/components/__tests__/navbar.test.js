import Navbar from '../Navbar';
import {
    screen, 
    render
} from '@testing-library/react';

afterEach( () => {
    cleanup();
})

test('Should have nav-link', () =>{
    render(<Navbar />);
    const linkElement = screen.getByText(/Smarkets/);
    expect(linkElement).toBeInTheDocument();

});