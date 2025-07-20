import React, { useCallback } from 'react'
import { DotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton
} from './EmblaCarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'


// importing the hook so that we dont get the error
import {usePrevNextButtons} from "../hooks/usePrevNextButtons.jsx"
import { useDotButton } from '../hooks/useDotButton.jsx'


const EmblaCarousel = (props) => {
  const { slides, options, topics } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <section className='carousel-section'>
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
  {slides.map((index) => (
    <div className="embla__slide" key={index}>
      <div
        className="embla__slide__inner"
        style={{
          backgroundImage: `url(/images/slide-${index + 1}.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '12px',
          height: '300px',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          textShadow: '0 2px 8px rgba(0,0,0,0.8)'
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
          {topics[index].title}
        </h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '80%', textAlign: 'center' }}>
          {topics[index].content}
          {/* Printing the content */}
        </p>
      </div>
    </div>
  ))}
</div>

      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
    </section>
  )
}

export default EmblaCarousel



// ------------------------------------------------New updated code-------------------------
