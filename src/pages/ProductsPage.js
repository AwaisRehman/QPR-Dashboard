import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Container, Stack, Typography, ButtonGroup, Button } from '@mui/material';
// components
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';

import INITIATIVES from '../_mock/initiatives'
// ----------------------------------------------------------------------

export default function ProductsPage() {
  
  const items = ["overview", "kpis", "initiatives"];
  

  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <>
      <Helmet>
        <title> QPR Dashboard | Strategy Objective </title>
      </Helmet>

      <ButtonGroup variant="outlined" aria-label="outlined button group">
      <Button>OVERVIEW</Button>
      <Button>KPIs</Button>
      <Button>INITIATIVES</Button>
     </ButtonGroup>
      <Container>
      
        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack>

        <ProductList products={PRODUCTS} />
        <ProductCartWidget />
      </Container>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          INITIATIVES
        </Typography>

     

        <ProductList products={INITIATIVES} />
      </Container>
    </>
  );
}
