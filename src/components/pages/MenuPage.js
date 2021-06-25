import React, { useState } from 'react'
import { Document, Page } from 'react-pdf';

import file from '../../assets/sample.pdf'
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { Layout } from '../templates/Layout'


export const MenuPage = () => {
    const { width } = useWindowDimensions()
    const [numPagesArray, setNumPagesArray] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        const holdingArr = []
        for (let i = 0; i < numPages; i++) {
            holdingArr.push(i + 1)
        }
        setNumPagesArray(holdingArr);
    }
    
    return (
        <Layout>
            <div className="menu">
                <h1>Menu</h1>
                <div>
                    <Document
                        file={ file }
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        {
                            ( numPagesArray )
                            && (
                                numPagesArray.map( numPage => <Page pageNumber={ numPage } className="menu__page" key={ numPage } width={ width * 0.8 } /> )
                            )
                        }
                        
                    </Document>
                </div>

            </div>
        </Layout>
    )
}
