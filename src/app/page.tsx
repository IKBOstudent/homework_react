'use client';

import React, { useState } from 'react';
import IconButton from './components/IconButton';
import TextButton from './components/TextButton';

function Page() {
    return (
        <div>
            <IconButton content="minus" disabled={false} />
            <IconButton content="plus" disabled={false} />

            <TextButton content="Да" style="filled" />
            <TextButton content="Нет" style="outlined" />
        </div>
    );
}

export default Page;
