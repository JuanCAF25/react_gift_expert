/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid/>', () => {
    const category = 'One Punch'

    test('debe mostrar loading inicial', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />)
        expect(screen.getAllByText('Cargando...'))
        expect(screen.getAllByText(category))
    })

    test('debe mostrar items desde useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: 'DEF',
                title: 'One Punch',
                url: 'https://localhost/onepunch.jpg'
            },
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render(<GifGrid category={category} />)
        expect(screen.getAllByRole('img').length).toBe(2)
    });

})

