import './GenericTable.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RestoreIcon from '@mui/icons-material/Restore';
// import { useState, useRef, useEffect } from 'react';

export default function GenericTable({columns, data, onEdit, onDelete,onForceDelete, trash = false}){

    return (
        <div className="table-container">
                <table className="tab-table w-100">
                <thead className={`table-header`}>
                    <tr>
                        {columns.map((col,indx) => (
                            <th key={`${col.key}-${indx}`}>{col.label}</th>
                        ))}
                        <th>الإجراءات</th>
                    </tr>
                </thead>
                <tbody className='table-body'>
                    {Array.isArray(data) && data.length > 0 ? (
                        data.map((row, i) => (

                            <tr key={`${row.key}-${i}`} className="table-row">{columns.map((col,index) => (
                                <td key={`${col.key}-${index}`} style={{direction : `${col.direction}` ? 'ltr' : ''}}>
                                {col.render ? col.render(row[col.key], row) : row[col.key]}
                                </td>
                            ))}
                                {!trash && (<td className="product-actions"> 
                                    <i className="action-edit fa-regular fa-pen-to-square me-2" onClick={() => onEdit(row)}></i> 
                                    <i className="action-delete fa-regular fa-trash-can ms-2" onClick={() => onDelete(row)}></i>
                                </td>)}
                                {trash && (<td className="product-actions"> 
                                    <RestoreIcon className='me-2 text-success'/>
                                    <DeleteForeverIcon className='action-delete ms-2' onClick = {() => onForceDelete(row)}/>
                                </td>)}
                            </tr>
                        ))
                    ) :
                    <tr className="table-row">
                        <td colSpan={columns.length + 1} className="text-center py-3">لا توجد بيانات</td>
                    </tr>
                    }
                </tbody>
            </table>
            </div>
    );
}