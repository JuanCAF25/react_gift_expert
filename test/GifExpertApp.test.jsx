/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('pruebas en el componente <GifExpertApp/>', () => { 
    test('debe agregar una nueva categoria ', () => {
        render(<GifExpertApp/>)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input(input, { target: { value: 'Perla' } })
        fireEvent.submit(form)

        expect(input).toBeTruthy();
        
    });
 })