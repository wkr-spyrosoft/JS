export const Tile: FC<Tile> = ({ data }) => {
  const useTile: {toggle: () => null, expanded: boolean} = (id) => {
      const getCollapsedElements = () => {
        return localStorage.getItem('testKey')
      }

      const [currentCollapsed, setCurrentCollapsed] = useState(getCollapsedElements())
      const [expanded, setExpanded] = useState(!collapsedElements.includes(id));

      const toggle = (): void => {
        setExpanded(!expanded);
        if (expanded) {
          currentCollapsed = currentCollapsed.filter((e) => e !== id);
        } else {
          currentCollapsed.push(id);
        }

        localStorage.setItem('testKey', JSON.stringify(currentCollapsed));
      };

      return {
        toggle,
        expanded
      };
    };
    
      
  
      const { id } = data;
  
      const { expanded, toggle } = useTile(id);
  
      return (
          <TileWrapper>
              <TileHeader {...{ expanded, onClick: toggle }}>
                  {data.name}
              </TileHeader>
              <TileBody>
                  <Link to = "/some-path/${id}">
                  {data.text}
              </TileBody>
          </TileWrapper>
      )
  }
