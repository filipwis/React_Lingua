import styled from 'styled-components';
import Avatar from '../../atoms/Avatar/Avatar';
import Heading from '../../atoms/Heading/Heading';

const StyledWrapper = styled.div`
  position: relative;
  width: auto;
  height: 130px;
  border: 1px solid transparent;
`;

const StyledAvatar = styled(Avatar)`
  position: absolute;
  width: 100px;
  height: 100px;
  top: 10px;
  left: 25px;
  border: 3px solid ${({ theme }) => theme.yellow};
`;

const StyledTitle = styled(Heading)`
  margin-top: 30px;
  margin-left: 140px;
  font-size: 25px;
`;

const StyledProgresBorder = styled.div`
  position: absolute;
  top: 60px;
  left: 140px;
  width: 260px;
  height: 10px;
  border: 1px solid ${({ theme }) => theme.grey};
  border-radius: 20px;
`;

const StyledPercentageContent = styled.div`
  position: absolute;
  height: 9px;
  width: 5px;
  border: none;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.cyan};
`;

const StyledParagraph = styled.p`
  margin: 15px 140px;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.regular};
  text-transform: uppercase;
`;

const DictionaryTitle = ({ title }) => (
  <StyledWrapper>
    <StyledAvatar src="https://images.unsplash.com/photo-1562917616-88a9472dbfe5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
    <StyledTitle black>Dictionary name</StyledTitle>
    <StyledProgresBorder>
      <StyledPercentageContent />
    </StyledProgresBorder>
    <StyledParagraph>learn from beginning</StyledParagraph>
  </StyledWrapper>
);

export default DictionaryTitle;
