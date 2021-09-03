import styled from "styled-components";
import { Flex } from "../Box";

const StyledBottomNavItem = styled(Flex)`
  width: 100%;
  padding: 5px 8px;
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

export default StyledBottomNavItem;
