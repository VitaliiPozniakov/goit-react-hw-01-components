import {
  SectionStatistics,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';
import { PropTypes } from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <SectionStatistics>

      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id} style={{ backgroundColor: randomHexColor() }}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </Item>
          );
        })}
      </StatList>

    </SectionStatistics>
  );
};

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({     //     PropTypes.exact({ ?
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

