import { Text } from '@chakra-ui/react';
import React from 'react'

function ItemDetails({ item }) {
    // Display item details here
    return (
        <div>
            <Text>
                <Text fontWeight={600}>Atomical Number:</Text> {item.atomical_number}
            </Text>
            <Text>
                <Text fontWeight={600}>Atomical ID:</Text> {item.atomical_id}
            </Text>
            <Text>
                <Text fontWeight={600}>Atomical Ref:</Text> {item.atomical_ref}
            </Text>
            <Text>
                <Text fontWeight={600}>Bitworkc:</Text> {item.mint_info.args.bitworkc}
            </Text>
            <Text>
                <Text fontWeight={600}>Nonce:</Text> {item.mint_info.args.nonce}
            </Text>
            <Text>
                <Text fontWeight={600}>Commit Height:</Text> {item.mint_info.commit_height}
            </Text>
            <Text>
                <Text fontWeight={600}>Reveal Location:</Text> {item.mint_info.reveal_location}
            </Text>
            <Text>
                <Text fontWeight={600}>Reveal Location Value:</Text> {item.mint_info.reveal_location_value}
            </Text>

        </div>
    );
}


export default ItemDetails;