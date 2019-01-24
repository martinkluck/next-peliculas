export default ({ Title, Poster }) => {
    return (
        <div className="pelicula">
            <div className="poster"></div>
            <div className="titulo">{Title}</div>
            <style jsx>{`
                .pelicula{
                    height: 300px;
                    width: 200px;
                    display: flex;
                    flex-direction: column;
                    margin: 10px;
                }
                .titulo{
                    text-align: center;
                    width: 100%;
                    opacity: 0.9;
                    background: black;
                    color: white;
                    font-size: 17px;
                }
                .poster{
                    flex: 1;
                    background-image: url(${Poster});
                    background-size: cover;
                    background-color: black;
                }
            `}</style>
        </div>
    );
}