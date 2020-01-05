import React from 'react'
import styled from 'styled-components'

const StyledMain = styled.main`
  * {
    box-sizing: border-box;
  }
  h2 {
    text-align: center;
  }
  .top-section {
    display: flex;
    width: 100%;
    align-items: stretch;
    border-top: 2px solid #333;
    border-bottom: 2px solid #333;
  }
  .quarter-size {
    width: 25%;
    display: flex;
    flex-direction: column;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    padding: 0 10px;
  }
  .breaking-news {
    margin: 0px;
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
  }
  .article-title {
    font-weight: normal;
    font-style: italic;
    font-size: 25px;
    margin: 15px 0;
    text-align: center;
  }
  .article-text {
    line-height: 1.2;
  }
`

const Main = () => (
  <StyledMain>
    <div class="top-section">
      <article class="quarter-size">
        <h2 class="article-title">Student Learns HTML</h2>
        <p class="article-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit
          amet nibh pretium, auctor eros eu, faucibus enim. Nulla ullamcorper a
          arcu ut accumsan. Fusce sed lacus metus. Etiam sed mi nisi. Donec ut
          euismod sapien. Integer dictum dolor non pharetra venenatis. Maecenas
          dapibus, ex eget aliquet tempor, quam mauris faucibus felis, ut
          ultricies lacus nisi sed purus. Nam auctor massa ut pulvinar ornare.
          Nullam volutpat vehicula laoreet. Nulla condimentum orci non felis
          dignissim, a luctus nunc pulvinar. Sed consectetur ullamcorper velit,
          ut vulputate odio volutpat at. Vivamus pharetra eleifend diam quis
          cursus. Aenean placerat quam lacus, a eleifend lorem consequat a.
          Quisque malesuada risus eu diam egestas lobortis. Pellentesque eget
          euismod sapien. Nulla quis ipsum massa.
        </p>
      </article>
      <article class="breaking-news">
        <h2 class="article-title">BREAKING: Puppies Are Adorable</h2>
        <img src="http://placecorgi.com/500/300" alt="dog headline news" />
        <p class="article-text">
          Integer dictum dolor non pharetra venenatis. Maecenas dapibus, ex eget
          aliquet tempor, quam mauris faucibus felis, ut ultricies lacus nisi
          sed purus.
        </p>
        <p class="article-text">
          Etiam sed mi nisi. Donec ut euismod sapien. Integer dictum dolor non
          pharetra venenatis. Maecenas dapibus, ex eget aliquet tempor.
        </p>
      </article>
      <article class="quarter-size">
        <h2 class="article-title">CSS Is Apparently a Thing</h2>
        <p class="article-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in
          condimentum nulla. Pellentesque tincidunt elementum odio, quis dictum
          diam iaculis vel. Curabitur facilisis, dolor faucibus lacinia porta,
          sapien nunc porttitor lacus, varius pretium urna ex ut nibh. Phasellus
          sit amet laoreet nisl, sit amet interdum metus. Aenean aliquam
          eleifend nunc, at aliquam erat condimentum sit amet. Duis vitae eros
          eros. Nulla et metus posuere, scelerisque eros quis, gravida ipsum.
          Curabitur convallis mi turpis, quis interdum leo laoreet ut. Morbi et
          nibh sed neque porta mattis eu in leo. Aenean justo lacus, efficitur
          consequat arcu et, fringilla vehicula urna.
        </p>
      </article>
    </div>
  </StyledMain>
)

export default Main
