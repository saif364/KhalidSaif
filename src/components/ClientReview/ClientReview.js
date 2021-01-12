import React, {Component, Fragment} from 'react';
import  {Col, Row,Container} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




class ClientReview extends Component {
    render() {

        var settings = {
            autoplay:true,
            autoplaySpeed: 1000,
            dots: true,
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:true,
            verticalSwiping:true,

            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className=" ServiceTitle">Our Courses</h1>
                    <Slider {...settings}>
                        <div  >
                            <Row className="text-center justify-content-center">
                                <Col  lg={6} md={6} sm={12} >
                                    <img className="CircularImage" src="data:image/jpeg;base64,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"/>
                               <h1 className="Header2">Web Development</h1>
                                    <p className="Paragraph">
                                        First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col  lg={6} md={6} sm={12} >
                                    <img className="CircularImage" src="data:image/jpeg;base64,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"/>
                                    <h1 className="Header2">Web Development</h1>
                                    <p className="Paragraph">
                                        First i analysis the requirement of project. According to the requirement i make a proper .First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="CircularImage" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExMVFRUVFRYVFRUVFRUVFRcVFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0gHyUtLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAK4BIgMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAABAgMEBQYHAAj/xABEEAABAwIEAwYCBwYEBAcAAAABAAIRAyEEBRIxBkFREyJhcYGRMqEHQlKxwdHwFCNigpLhFRYkcjNTsvEIF3ODosLS/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJREAAgICAgMAAgIDAAAAAAAAAAECEQMhEjEEE0FRYSIyFHGR/9oADAMBAAIRAxEAPwCH7MIezCbB5SjXlYUdnIW0JXD4Jz/hCDB03VHBo5rR8mydrWiyaTJcij/4A6JJUbisCWrTMzoNYFT80gqeVFUmVctQQnVdl0jC0RDCQuhHhDpTEEARkaEMJAAAhhGaE8wuBLuSluikm+hlpRg1TJykgdUxxGELVKmmW8bQ0IRSEchBCszCwghK6D0QtpO6FJgiyZBQ0tUljnQ0qOy+vA2K7MsaNMLjkm5nZHUSt48y5NkpUdJlFhda6ORu2FhBCWo0HPcGMaXOJgNaCST4AK25d9H9ZwDq720h9kd9/r9Ue5TYilkIsLUKfA+DaLmo8/xPj5NATHHcHYdw7gfS6HVr9wfwKmylGzPIQQp/GcKYhkloFQfwG/8AS6D7SoSpTLSWuBBG4III8wU9MQrgcZUouD6bi1w2IMFW/CfSTimCHtY/xIIPysqQUBS4h/stWcceYqu0tDhTadwyx/q3VTeZQoQEkkgCaV2lKQghMBPSuRoQoAVAS9KgSjYLDFxUoKbWbqrGkSfCeAHaX6LRaTAGrLcLnbaLg6dt/JWyhxNTqN7rt1rBWjHI9jnO6ktKoWY1rqy5ljtQVSxTSXLGcdmuOWhq66IWpz2aLpWiRLexDSh0pUtQ6UxCWlG0pQNRg1AA4OjqcArxlGUyBZVTJqc1WhaxleFhosufKr0awlxVkUcnEKv53lcTZaOaCgeIMN3CY5LH1uLGsvLRkVZkEhS2S5bruQmOMb3z5qz8NvAAXTLomPZJ4bI2xsnH+BtHJTGHrthKOxDViWVjE5XpFlBZhgldcXiGwq/j6rUqLT+FQrYOE3pYV73tYwFznENaBuSVM1yCprhGkKQdiNIL5LWE7NaB3iPEmR6HqtIy/JEsd9Fp4dyGlg6cAA1SP3lTmT0HRo6eqdOq3391AVuI6o3aw+hH4rsPxJRcYqAsM7/Ez33Hqj2RY/RNK6Jxz58v1a3kU3qeHM/r81wryJBa5rrgjvDbl1vCa1sRIIE9BH3gdYgjr7qiUIYh0H9fPxUVm+BZiGw4Q4fC+O838x4J49xtH9pO0eG6SqOjpzkbbA7yoZZnWLwrqbyxwu0x59CPApGFZ+KcPOmoOXdPluPx91XtK0TMZKmJALtKVLUEJCE4QFHIRSgYSFyFcgCcdWawKv5pnBNm3Kb4utUqEgbSlsFlR3KaBsjqdOpU3lTeVYZ7NiU9oYMDknuGZceav4QXLKeDqtWm19R4ZqEgRJg7T0UtQ4Dw4B1Oe49RDQPS6tNEQ0eQSiFG1bM3NmTcUcLuwveB1UyYDuYPRwVcLVtPElJrsNVDttBPqBI+axxzU120NO0N9C7QloRmUibAEnwuqAQDUcNSgYUuMG/ctI9EmNE1wRlZq1tUWYPmdlqNKmAFA8E5f2WHBIhzzqPrt8lYkoq3ZM38OTPMsPrY4eCeICE5RtEp0zCsRShzh0JHzS2DxhpqX4uwJpYipaGuMtPK91AEKO0b3ROM4hhD/mIqAIQEI4IfNk3UzwlMK+YymUIpajig5sXY8uIaN3EAeZMBXhtMU6YYNmNAnaY3PqZKgcBklNrNb8V2NTTraBTLoAbrnUTE6Zt5pfNcXTfQY2dZJkudu5hbqBjYEzy+axmjowytiGLxTZPeBUZiH2tzHsm+aiiKLHMDqbS547gMgjQCHG87g8tymNGjVcJbW7ot32tPkBABKwao7YTtCWGzWvhqji1zhPKZa4dSDbr7q8ZdxGHyKrBMSXM8TAtP49VQ8xo1wO86mf5HNP8A1FNsJm9anfQ0gagRqg/DY7eMrSLObLFJ2zUBVa+9N4dHj3p5yD1tPl7JPfBgkkwb33nly8J8Lqh0se6qw1NHZAPA1Oc1rehh28m23VSH+YatO9qrZsHG8TuH/nKd7J4Or+E5mZDqb29AT5ab79VV+zVt4bFHGVW09RGoHU22sDSb+IkbqTzrgFzWl1B2uPqOEO9DzVq6swm1dGelqIQndamQYNiOSQIVEiBCIQl3BJlqBCULkpC5MBDJ6urorBTMKjZXUqU6mlwgq50XEgK4RJk6HQKUZYym7SlGlacCORo+ScW0nNDap0OAifqnx8FNPzvDgSazI/3D7lkQXSlwa6ZLaZbeLOKG1mGjSnST3nbTHIDoqaQltKDSqUKCxLSneX4nsybbiEhpQ6UNWioSadoWwwfTqdsBqBP1v/r0V/yKpRxTJbeLOad2nxUVw5hmVKRa8SCP1Ch+GsUaOY0mzDamumR5guZPUy0e68+UKmd7ayQckqaNRpMgQlECFdyVKjzGcuXLkwIzOMubVadQn0Wf5tkugm1lqLhZVzPaQgrnyfxejoxO9MzCrTgwkyE7xvxlNyFqQ+xIhcj6V2lAWT2Jrk0qL7yKLaYby7he0P8AElpCjqdZjCDUvfcxbz9yk8dVxFSgOxe1rqWloBE6gZiPHkolmDqlwNap2kEEtADWz4jcrkyJ2er47hwSSLXicO3SG/VBJA5S6Jn+kKOxEN2+WycU8w10yNiDcHcKNxLXOENHO52A/X4rJm6SSGWPcXecKCr4QtHi6x8Bb5qx4vCNpNuTItf3gTsozHQWtI6kCPHkqWjObUiJwdZgr0xUBcxlSSBsLDSSOYup/NKrWNqNMf8AFaGfztmB6QVG4PCOaS513buFmgAbD7rqMxuYg1pJ1BhkEWGs7uHgAAB5JxXJ6DJL1wd/TTPozo/60RfTTqAnoBb73D2WurMvocpBxr1umlg/n77vWAxaJj8fSotL6j2tA6n7uq6oNRjs8fK7lozP6QsE1mKJbbW0PI8bg/cqm4KX4oz1uJruqD4fhb/tH6JUMa7VEVo0CkIhalO0HVBIVgJQuSq5AEdn9ENqtf6FTeBOpohMuIqMtmETh3F6mxzCuC4uiMjvZNhqUaxGaEoAumjBsJpRYS+lF0J0TYVoQwlGtQ6UqHYlpR8foAbTJg6Q71N/yS1CgXuDRuTCTznB0y+CJLQLmfdcnlOkkeh4Ebm2I4bNMRhjqpkOb0In7lHVs3eKtKsWQadRtS3PS4Ej1hOtLgZDhHT+yic4fDbHmuKz05QVM9A4Wu2oxr2GWuaHNPUESClVnP0RcQdpSdhHnvUu9Tk70yTI/lPycFosrvhNSVng5IOEmgUCAuSVSuAnKaRKTYNepCqXEeOABCeZxnDWzdUjHYh1QyVik5O2bagv2MKlySiaU50ICxbGdjbQu0JxoQimkwHGT0C5xbJAcIdpsdIub8jZRubdkO61x5x3y48t7R9r38FOjAhrQTExPON9lAZhhwS3SBsIA5GS0gRylcuR2z0/GtKhHLqDgXHUYcIGq5nV4eFvRO3YgNeGmIBIPhNhHWAeSTqamMBIAIvcbDaW+wUZiQXEiY+Iapv3yHAGR4j5qKNZSS0h3mDjI13IGxmC6JsZvKrWJql1jy5CwHgI2/upyuRpGmSJkzv5jpeT6eCgKrtTzFyb26RvPTxTZC2xPEYiq4aXOOnaOo8TzULiGQ4+4VqweCqVTFNjqhG+kWHgXGw9UyzzJ3Uj+9dSpnfQarDUI8GA3TxS2T5CuO2Bgc1r0cM3Q9zIqvBLXadWprIkAyfhSGIzutUMvqOcfEk/eo/HVRpAAgNHqSeZTGnVW3rXZxcyW/bndUP7e5MaZRiqoQ9GZuSjc3KiyglMRaWYkkAzyXKAbiDCFIejQ8VQ1NIhVbAzSrlvIlXBmICrHEb2tcHwZBW0/wAoyj+C20LgFLBqjsgxQqMCmgxdEXaMZaYiGoQxL6EIYqoixDQh0Jfs0OhKgsJh3Fjg4bgykc0xEMfUdtI/pub+6daEFSiHAgiQdwscuJTR0+P5DxP9FXw+IZWJcyYbAJ6E7bphm1UOEc5VwyzKqVIu0NjtCNUmesRO26gs5y4Ceo+9edlxPH2ezi8iOZOiDyXMXYauyq3dp9wbEey2DBcWte0OixEysXq0jvzTl+fPwH7nTrqSHVGEw2lI+AkXNSIkbNsLmYeHbpnP5UNX9NkqcStIsozGZ691hIVNyfizDV4aXdk/7NQgA/7XbH5HwU/oXUscezznOSEqri4yTKT0J83Dd3U4xaQIlxA+IgTsBJ9FGtzCkXBodvtOxQ5LoOEmrD6EGhOSxBoTJsbaE8y7Dhz7iY5eMWRGsupbKmi5OwMeaiWkXDbI3iGjUMNZ6bxHXkmuGyzSL3uL+AHLx8VaMWAT6KDxdUgW8uvP+5XOztTdEJmsWbtNgGi8ATbpyuoXFCO9f49JHWY945nxU/mJLxIIaII1H4gDv5npHzURXwxrO7Jh0iY5d1pJknq4/gkO2RmDqVa7wynJJ6bDSJ35BW/JuDKVJpq4lwgS5w1aabQNy9xjUB6DwKksswWGwNBz3FrGMHfcdze225JNgOsBZhxpxjVxrtDQWUGnu0pu4jZ9WN3dBsPE3VKFilkaWia4o49EGhgAKdMW7bSBP/pMiGj+IiegG6zqsSXFxJJNySSST1JNyufO25OwRhQPM+gW6SRzNthy+W+SbsS3ZtHVc1gTFQtSQkrgIQJAFXISioEBKFKCkei5MKNT/Yj1UfnGUl7DIU6x4S5giF28U0cnJplAyDMhQf2T7XstCwVUPEhZ5xhl2l7ag63V74Vh1Nt+QU49Piysm1yJPQjCmnTqASThC2MLE+zXdmlAUMpUMS7NBoSpcilymhoJoUZn1EmX9d/AqU1JN8EEESDyKwzYlNUdPj53ilfwp4rswtN+LcAXUxFBpiDXdanI5hvef/Is3cSSXEkkkkk3JJMkk8ySVYeOMwa7EGlTAFOl3bTBqfXPp8PoVAsLf1/2XLCHDR15cvsfIScpTKOJcRhoDHy3/lv7zPQTI9CExLB1RK1CRIj9eiozaNC/zvTrPp1B+5e3SSxxlmoROh32T0MRMJjmdZvaOLLCZaByBuAPKYHgqI2kedk4weLdRe19N0FpBALQ5sjaWmyVDUjccOw6W6vi0ifOBPzR9Co2W/SGNP8AqKRkbupRB8dLjb3KtWUZzSxVPtKLtTZggiHNPRw5FXZztNdj7QneDeAPWfa6Z61wqQk1Y4umS5xLfNR1SlIk7fobfrZIGqi9uVn6zX2sBmC1nSBvYAeV/wAUZ2UCg11WpDGMGpzjZrQBckqyZFl+iKj/AIiDDfsg/iR96y/6TuKji6pwtE/6eke8QbVajefixp26kE9FNRfRrGcktlT4x4mfjKga3U2hTP7th5nY1HD7RGw5DzKhaNLql3BrfNIOqrRfghsWbDbpu+qEk9xP6KAM/QAVUTYflJ9EUOXFs7z6lFLkxWOaT5t7fkgdUSDXJR1FzjIFjf8ANIDjVRTVS9PLah5J5SyB53RYDVmPgARyQJ9/gBXI0Fl3bmjZ3TylmI6rPzXddGbi3dVa8hoTwFt4irNfTPNQvDfE7qBDXXHndNaWKkQSobH2dIS9jbtE+tJUzXaHF9Bzfiv0gozM9Y/YrJ8trXupgY4t2Kr/ACJXsX+PCtGjtx46o/7cOqztmdO6pUZ4VovIiR6GaB+2hB+2BUVufeKMc+EEnYc/w80/chell2OMUPn3EjKLHhrgauk6GiDBNgXdBz8YVJx/ENSqNLAQP4Zv5n8FHMwrnA6nBvNoHXqY8/FZSy30axwpdjKo07mfP+6BohK1qTm7i3Xcf2SxxTXkahAAJG7hJidthawWRoN2o0JR7GgahtNh4Em3mESyBiBlACAZISpam1dNCYrTfqDyRyIHgnvC+euwT3Pa3WHthzC7SCQe66YMEX903w1OGpjWbBQhM1Hh/jVmIcKdSn2Tz8Pe1NcekwIKsprLD6WyVGY127Vqo/8Acf8AmgXE2ntVI5BhxVqifhaNTvTYepj5rH8u4wrtbocQ8i4e7ffYxE+at+U/SJSoUHu7M1Krw3u6tLW6dUyYJNz09VE7qkOMdlq+krifsaRoUnRUqghxG7GfWd4E7D1PJYtiMUANLRA6/h4JTNM9fiHufUcZdyJsPAFRjzBU48fFbNJST6BdVKL2p5orqiIStjNsO6qSknOKELtSCQO1hB2i6F0JgCCrlwFRZWNSm7cND2+hh33tVMCnOEcwFDENeTA0uafIj8wEgNJZlVMcgjuwjGjZRDeJaRPxBBiM+pxZwSoVir2NkoVWn50JN+a5IZGueJQteOam28GYpxsG+5/JRuf8PYjCs11AACYsZuVPpl9Rs80PjGdWsOSY4i6SpVZN06c4WVqNGTlYfDtACWhIsMmBfyTmpRcyzmlp8RCzlZrBo4BCgphzjDQT5CUq7C1edN/9J/JRTNLSEkliK0FuoHSBAPIEklxPnIv4eCXNNw3a4ehTrJ8vNeq2nJa2C6o6Pgpt+N3ncADmXNHNNXfQOmMmPB2IPkZR5V/xTKFRvZvpsbT7raYENcwNGlgY+NwORkGTa5Vdx3Djqc1Gu7Si0F0tBFSByc0T6uEiJNrBXkwzgJSTIdjtLS4kNkECefJwFrdJ626xD0GuqOMNDW7zBHkB1P8AdLuf27tR+AWAGzo2Hg0frmU8ap5cdE8eT/RGVaTm7j1RdSlk2q4Rp2t9ypZPyDxtdDJyQcnVSk5u+3VJls+a0M2OaNUgbprjLiUvT2RYmyQMQwxSlZghN2jQ6E8hDD4MKZsT5BK032hEqNi3jKKAmSc7nZdh5Pd9vDyS5pyJSVFulwKAC6VxKNUdJMbSiQgQUhACjoCmAAKElAgQAZKUN48D9yTS2E+NvmgEH7MoNJ6lS1PD6jCUr5ZAlZexG/qIsUlyedkuRzF6z08zLADt8lAfSBwq7F4R7KYHaAAtm1wQY+SvDWoXBdnsZwLGkeVqvAmPa4t7AyBNnN28DKRpcL4kua3SJc7SJeN72PTYr09mWHboJjl+KwPNMze3HFoDQGYh5Nru75NyhQhVlc53Q3wOQYnAV6VfEU4pB4a4yHAB1pPS5C0fiThmnXpBzQLiQQrfnWTsxWEfTcLVKR94kfNVT6O8wdVwr6FQ/vMO4sdO/d2+5XFRqiJSl/b6E4W4PpsaJaJ6ndXGlkdOILR7J5llMFocNiJUgFEpcdIaTltkBW4do/YHss64wr0qFR1Gk0TY1iPC7WT0HxHxI6LYa4Ok6bGDB8YssSzvJ+zqkF5bUe49ysQ1znOuezeYbUO9rHzSjNX/ACNscK2iNrvEse3UXAwIGprZ5kbgmTy5e77IaL6bAC7YktAbogRzESDMn1TGlh3NfBlpBvaDPQg7b+CeV8Q5jAB3qjzopgC5cbC3W49SFfFRbmzZO6RK5JlGHxtes00m/ugzU8NAl7i7UDFpsPEwU8zL6PqMd1keSu3BvDrcHhm0jBee/Vd1qEXvzAEAeXipipQBXPSfZlKb5aMcwP0ejV3pIUv/AOWNAi2oepWktwonZOG0wp4RDnIyat9F9MD4neUyqbxF9H7qUupkx9kiR6L0U6kCobN8vDhsjjXQc39PL2IwNamNTmODR9aDp9XcvVNhUPX8V6cyfJWsJEbomb/R1luJkvwzGuN9dKaT56nRAd6goSHzPM1TvC6GnWMQQLLYc3+g/c4XFkfwV2T6doyP+krMuI+F8Xgn6MTRLfsvHepu/wBrxY+W/giikyDqOm6ISjVICRLkxDjtIaEg56BBCADSulBpXQmIHWgldK5AwVwQgiEICQABL4T4x5pIBSHD+F7XEUqf26jW+5SYIn8mpAmSn+cFoakK2BqYd5bEx9ykshyStizdnc6kXPksvWzp96USoly5aqPo2p9PmfzQp8DL3I2BcuXLc5xvjhLCPL7wsSr8LurY7WD3XVXlw86hbb3+S27F7eo+9VPKqY7Wn7+5lbY+tmU209Fvpshob0ELKKYODzquzaniaerwDuXzn3Wtqk8YZU1+Lov2LqdRk+zgfQhTj/sVPSJbgrGirh9/he9h/lcQrAsz+h3HuccZRd9Su4zyuSD8wtKLoUz7HFUqG+ZY+nQpuq1XBrGiST9w6lYPm+LxXEGOGHojTSZ8TiJZRpTdzurzFhzPgCUfjvievmWMp4KkezY6qKTA421E6S9+n1sFr/CvDlDLMN2VITAL6lQga6j47znfgOQso7NOik57kgwdTCYSmHYhtYVGtD3E12No09bnB95G3d2vYJ1wHw+6pin4qq0hlAmnQaeb4u8+IB9z/Cn/AAVXOZYqrmjrU6YfhMLSPxMAcDWqv5anEAQJgBXwBFf8HzdUcuQrkyAEK5cgDkhiGSl0R4QAjQppyiUwjpIDlhf/AIgOKHGrSy+k6zAK1aN9bpFNh8my6P4mrbsbiBTpvqESGNc8gbkNBJHyXj/HY9+JrVcTUMvqvdUPhqMwPACAPAIY12K4HKatcDQ3U4u0gdTuT5AbqVfwY4F1PtCajQCQ2mXNuAbHVP1gJhWHgRgbWaw8qDnSOpLC4j3ITzPqujFVC1oLSGgtcXGbUngy0gggsClMubrRl1fC1GaiWO0tIBeASy+3e2ui9lUt+7f3iA3unvFzQ5ob1lrmm3JwPNXPNM6qdsXaWF9TvueQ8O+F1NoDmPBaA174iCNW8WSWM4pxFYtkUxoqU6o0hzQ51L4Gu7xGmwMAbid7q0iSrNwNQlrA1xe6C1gBc4g/WAE92xv5pOvh3saHlp0kxqjuzfu6tpsfZW+lxTi2FhAouIAAc5r7kX1PYDoc483ESZN4siUeIa9P6tIgPe8ag9xDqhHaXLpg6WiZm29zJQWVuth202O1Nd2gsQYaGdZBuT+vFN6dManCpLNBh4I7wImW6TsbHyhW6rxLiSHD93pdJcAKgkSJEa9LQYuABPOTdDieJsS6Z7OHl2r/AIly9rdQgvIDe6LACTcyboDZUMcwMdGh7AQHNFQQ4tIs7xBubWXYahUqA9nTe+CAdDXOgus0HTtPJWbD5vWbTNNzaLmlmiCKl29kynDocJOmm3vRN3QQCQi1OIa5dVdUZScardDzNT4NOgsaARALQJ590QRCKGV/sKgBJpVABEkscAJJaJMcyCPMKY4OrijmOH7RjwWVQ5zCNL7NJjS6I5bpR2c1KjXTphz9RGnn21SudybF75MRPZsHIzLZHn9c1WtOgh5e4n94HSDUeIIeA29Q3ABIABJSaC2W/MM3w1WtenUg+DYMXI1TExeFa8r4nwlJsNoVLC8BlthPxdSPdUYcRVfihlnhvwkdTcB0fluIKkqOavLCIbDm6T8W0zYk79TuecqY0KTb7Lr/AJ5w/wDyav8A8P8A9LlQFyqiT//Z"/>
                                    <h1 className="Header2">Web Development</h1>
                                    <p className="Paragraph">
                                        First i analysis the requirement of project. According to the requirement i make a proper .First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Slider>


                </Container>

            </Fragment>
        );
    }
}

export default ClientReview;