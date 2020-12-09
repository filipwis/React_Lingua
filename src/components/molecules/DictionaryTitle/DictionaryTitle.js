import styled from 'styled-components';
import Avatar from '../../atoms/Avatar/Avatar';
import Heading from '../../atoms/Heading/Heading';

const StyledWrapper = styled.div`
  @keyframes appear {
    0% {
      opacity: 0;
      top: 35px;
    }
    100% {
      opacity: 1;
      top: 0;
    }
  }
  position: relative;
  display: fixed;
  width: auto;
  height: 130px;
  border: 1px solid transparent;
  animation: appear 1s ease;
`;

const StyledAvatar = styled(Avatar)`
  position: absolute;
  width: 130px;
  height: 130px;
  top: 10px;
  left: 25px;
  border: 3px solid ${({ theme }) => theme.yellow};
`;

const StyledTitle = styled(Heading)`
  margin-top: 40px;
  margin-left: 165px;
  font-size: 25px;
`;

const StyledProgresBorder = styled.div`
  position: absolute;
  top: 70px;
  left: 165px;
  width: 260px;
  height: 10px;
  border: 1px solid ${({ theme }) => theme.grey};
  border-radius: 20px;
`;

const StyledPercentageContent = styled.div`
  position: absolute;
  height: 9px;
  width: ${({ knownWords, wordsCount }) => (knownWords * 260) / wordsCount}px;
  border: none;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.cyan};
`;

const StyledParagraph = styled.p`
  position: absolute;
  margin: 85px 165px;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.regular};
  text-transform: uppercase;
`;

const DictionaryTitle = ({ title, image, knownWords, wordsCount }) => (
  <StyledWrapper>
    <StyledAvatar src={image} />
    <StyledTitle black>{title}</StyledTitle>
    <StyledProgresBorder>
      <StyledPercentageContent knownWords={knownWords} wordsCount={wordsCount} />
    </StyledProgresBorder>
    <StyledParagraph>learn from beginning</StyledParagraph>
  </StyledWrapper>
);

export default DictionaryTitle;
