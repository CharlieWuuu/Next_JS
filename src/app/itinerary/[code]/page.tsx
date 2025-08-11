'use client';

import React from "react";
import { Container, DialogTitle, Paper, Input, Button } from "@mui/material";
import Link from "next/link";

type Props = {
	params: {
		code: string;
	}
};

export default function Itinerary({ params }: any) {
	const code = params.code

	return (
	<Container sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Paper sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 2, p: 4}}>
        <DialogTitle>
          歡迎來到 {code} 行程
        </DialogTitle>
        <Link href={`/`}>
          <Button variant="contained">前往頁面</Button>
        </Link>
      </Paper>
    </Container>
	)
}
