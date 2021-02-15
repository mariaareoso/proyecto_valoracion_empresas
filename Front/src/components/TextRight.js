import '../css/style.css'

function TextRight(props) {
    const { titulo, img } = props
    return (
        <div className='contenido'>
            <div>
                <img src={img} alt={img} className='image' />
            </div>
            <div>
                <h2 className='titulo'>{titulo}</h2>
                <p className='texto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a suscipit enim, sed vehicula augue. Donec vitae dui a elit viverra aliquam. Sed gravida est vel semper pellentesque. Nam ultricies urna sit amet diam dictum condimentum.</p>
            </div>
        </div>
    )
}

export default TextRight