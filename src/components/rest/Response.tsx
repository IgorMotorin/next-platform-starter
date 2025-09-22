import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { toast, Toaster } from 'sonner';
import React, { JSX, Suspense, useEffect, useState } from 'react';
import { useRestStore } from '@/store/restStore';
import { Button, Typography } from '@mui/material';
import JSON5 from 'json5';
import { useTranslations } from 'next-intl';

function AsyncComponent() {
  const response = useRestStore((state) => state.response);
  const [data, setData] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const t = useTranslations('Rest');

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      if (response) {
        const text = await response.clone().text();
        if (mounted) {
          setData(text);
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      mounted = false;
    };
  }, [response]);

  if (loading) return <div>Loading...</div>;
  let text;
  try {
    text = data ? JSON5.parse(data) : '';
  } catch (error) {
    if (error instanceof SyntaxError) toast.error(error.message);
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data);
      toast.info('Copied to clipboard!');
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      }
    }
  };

  return (
    <>
      <TextField
        id="outlined-multiline-static"
        value={text ? JSON5.stringify(text, null, 2) : data}
        multiline
        minRows={4}
      />
      <Button variant="contained" onClick={handleCopy}>
        {t('copy')}
      </Button>
    </>
  );
}

export default function Response(): JSX.Element {
  const response = useRestStore((state) => state.response);

  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '98%' } }}
      noValidate
      autoComplete="off"
    >
      <Typography>URL: {response?.url}</Typography>
      <Typography>Status: {response?.status}</Typography>

      <Suspense fallback={<div>Loading...</div>}>
        <AsyncComponent />
      </Suspense>
      <Toaster />
    </Box>
  );
}
