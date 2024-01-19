import React from 'react';
import { useAtom } from 'jotai';
import { AppsAtom } from '../../atoms';
import {List, ListItem, ListItemText, ListItemButton, IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CartList: React.FC = () => {
  
  const [apps, setApps] = useAtom(AppsAtom);
  const removeFromCart = (brewFormula: string) => {
    const updatedApps = apps.map(app =>
      app.brewFormula === brewFormula ? { ...app, isAdded: false } : app
    );
    setApps(updatedApps);
    console.log(apps);
  };
  return (
    <div>
      <List style={{backgroundColor: "#1F2937", borderRadius: "16px" , alignContent: "center", color: "white"}}>
      {apps.filter((app) => app.isAdded).map((app) => (
        <ListItemButton key={app.brewFormula}>
          <ListItemText primary={app.name} />
          <IconButton onClick={() => removeFromCart(app.brewFormula)}>
          <DeleteIcon color="error" />
          </IconButton>
        </ListItemButton>
      ))}
      </List>
    </div>
  );
}
export default CartList;
 
